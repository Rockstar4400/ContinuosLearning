package com.magicbytes.myapplication.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.magicbytes.myapplication.model.Exams

@Composable
fun ScrollContent(
    innerPadding: PaddingValues,
    data: Exams
    ) {

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(innerPadding),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        data.exams.forEach { exam ->
            ElevatedButton(onClick = { }) {
                    Text("Exams: ${exam.name}\n"
                )
            }
        }
    }
}