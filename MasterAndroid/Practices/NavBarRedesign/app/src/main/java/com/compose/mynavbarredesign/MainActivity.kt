package com.compose.mynavbarredesign

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.compose.mynavbarredesign.components.CupcakeApp
import com.compose.mynavbarredesign.ui.theme.MyNavBarRedesignTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MyNavBarRedesignTheme {
                CupcakeApp()
            }
        }
    }
}
