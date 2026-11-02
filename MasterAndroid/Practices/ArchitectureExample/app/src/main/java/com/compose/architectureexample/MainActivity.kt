package com.compose.architectureexample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.compose.architectureexample.architecture.blueprints.todoapp.TodoNavGraph
import com.compose.architectureexample.ui.theme.ArchitectureExampleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ArchitectureExampleTheme {
                TodoNavGraph()
                }
            }
        }
    }

