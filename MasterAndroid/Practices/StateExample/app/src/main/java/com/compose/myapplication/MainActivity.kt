package com.compose.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
//region imports needed
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
//endregion
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.compose.myapplication.ui.theme.StateExampleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            StateExampleTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) {
                    innerPadding ->
                    HelloScreen(
                        modifierParam = Modifier.padding(
                            innerPadding)
                    )
                }
            }
        }
    }
}

//region hoisting
@Composable
fun HelloScreen(modifierParam: Modifier = Modifier){
    var name by rememberSaveable { mutableStateOf("") }
    HelloContent(
        name = name,
        modifier = modifierParam,
        onNameChange = { name = it })
}//endregion

@Composable
private fun HelloContent(
    name: String,
    modifier: Modifier = Modifier,
    onNameChange: (String) -> Unit) {

    Column(modifier = Modifier.padding(16.dp)) {
        Text(
            text = "Hello $name!",
            modifier = modifier.padding(bottom = 8.dp),
            style = MaterialTheme.typography.bodyMedium
        )
        OutlinedTextField(
            value = name,
            onValueChange = onNameChange,
            label = { Text("Name") }
        )
    }
}