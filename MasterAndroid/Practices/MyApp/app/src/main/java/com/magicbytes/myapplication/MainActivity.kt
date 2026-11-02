package com.magicbytes.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.magicbytes.myapplication.repository.readLocalJson
import com.magicbytes.myapplication.ui.components.CenterAlignedTopAppBarExample

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        // Read and parse the local file
        val exams = readLocalJson(context = this)
        //region Content
        setContent {
            CenterAlignedTopAppBarExample(exams)
            //val state = rememberScrollState()

            //region Column
            /*Column(
                modifier = Modifier.padding(16.dp)
                                   .verticalScroll(state),
                content = {
                    exams.exams.forEach { exam ->
                        ElevatedButton(onClick = { *//* Do something! *//* })
                        {
                            Text("Exams: ${exam.name}\n")
                        }
                        //Text("Exams: ${exam.name}\n")
                        *//*exam.chapters.forEach { chapter ->
                             ElevatedButton(onClick = { }) {
                                 Text("          Chapter # ${chapter.id}: " +
                                    "${chapter.name}\n")
                             }*//*
                            *//*Text("          Chapter # ${chapter.id}: " +
                                    "${chapter.name}\n")*//*
                            *//*chapter.examQuestions.forEach { answer ->
                            Text("                Question # ${answer.id}: " +
                                    "${answer.questionText}\n")
                                answer.answers.forEach { answer ->
                                    Text("                      Answer # ${answer.id}: " +
                                            "${answer.textAnswer}\n")
                                }
                            }
                            chapter.examQuestions.forEach { correctAnswersIds ->
                                Text("Correct answers: ${correctAnswersIds.correctAnswerIds }")
                            }*//*
                        //}
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
                })//endregion*/
        }//endregion
    }
}







