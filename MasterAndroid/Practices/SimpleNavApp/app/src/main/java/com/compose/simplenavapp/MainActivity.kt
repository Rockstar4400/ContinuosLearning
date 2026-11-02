package com.compose.simplenavapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.compose.simplenavapp.ui.theme.SimpleNavAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            SimpleNavAppTheme {
               // 1- NavController: Navigating between composables
            val navController = rememberNavController()
            NavHost(
                navController = navController,
                startDestination = "first",)
            {
                composable("first"){ FirstScreen(navController)}
                composable("second"){ SecondScreen(navController)}
            }

        }
    }
}

@Composable
fun FirstScreen(navController: NavController){
    Column(modifier = Modifier.padding(40.dp)) {
        Text(text = "This is the First Screen")
        Button(onClick = {
            navController.navigate("second")
        }) {
            Text(text = "Go to 2nd Screen")}
    }
}

@Composable
fun SecondScreen(navController: NavController){
    Column(modifier = Modifier.padding(40.dp)) {
        Text(text = "This is the Second Screen")
        Button(onClick = {
               navController.navigateUp()
        },
        ) {
            Text(text = "Go to First Screen")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
        SimpleNavAppTheme {

        }
    }
}