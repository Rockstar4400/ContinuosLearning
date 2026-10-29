package com.magicbytes.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.magicbytes.myapplication.ui.theme.MyApplicationTheme
import android.content.Context
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.ui.unit.dp
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.magicbytes.myapplication.model.Exams


class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        // Read and parse the local file
        val exams = readLocalJson(context = this)

        setContent {
            // Access your data safely
            Column(
                modifier = Modifier.padding(16.dp),
                content = {
                    exams.exams.forEach { exam ->
                        Text("Exams: ${exam.name}\n")
                        exam.chapters.forEach { chapter ->
                            Text("          Chapter # ${chapter.id}: " +
                                    "${chapter.name}\n")
                            chapter.examQuestions.forEach { answer ->
                            Text("                Question # ${answer.id}: " +
                                    "${answer.questionText}\n")
                                answer.answers.forEach { answer ->
                                    Text("                      Answer # ${answer.id}: " +
                                            "${answer.textAnswer}\n")
                                }
                            }
                            chapter.examQuestions.forEach { correctAnswersIds ->
                                Text("Correct answers: ${correctAnswersIds.correctAnswerIds }")
                            }
                        }
                    }

                    exams.miscChapters.forEach { miscChapters ->
                    Text("MiscChapter #${miscChapters.id}: ${miscChapters.name}\n")
                        miscChapters.examQuestions.forEach { questions ->
                            Text("      Question #: ${questions.id}\n" )
                            Text("                        Question: ${questions.questionText}\n" )
                            questions.answers.forEach { answers ->
                                Text("                      ${answers.id}  Answers: ${answers.textAnswer}\n")
                            }
                        }
                        miscChapters.examQuestions.forEach { correctAnswersIds ->
                                Text("Correct answers: ${correctAnswersIds.correctAnswerIds }")
                            }
                    }
                })// End content
            // End setContent
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    MyApplicationTheme {
        Greeting("Android")
    }
}

fun readLocalJson(context: Context): Exams {
    // 1. Read asset file as a String
    val jsonString = context.assets.open("questions.json")
        .bufferedReader().use {
        it.readText()
    }
    // 2. Parse the string into objects using Gson
    val listType = object : TypeToken<Exams>() {}.type
    return Gson().fromJson(jsonString, listType)
}