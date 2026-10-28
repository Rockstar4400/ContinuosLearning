package com.magicbytes.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.magicbytes.myapplication.ui.theme.MyApplicationTheme
import android.content.Context
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken



class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        // Read and parse the local file
        //val Data = readLocalJson()
        val Data = readLocalJson(context = this)

        setContent {
            // Access your data safely
            //Data?.''?.forEach { exam ->
                //Text("Exam Name: ${exam.name}")
           // }

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

fun readLocalJson(context: Context): List<Exams> {
    // 1. Read asset file as a String
    val jsonString = context.assets.open("questions.json")
        .bufferedReader().use {
        it.readText()
    }

    // 2. Parse the string into objects using Gson
    val listType = object : TypeToken<List<Exams>>() {}.type
    return Gson().fromJson(jsonString, listType)
}