package com.compose.mynavbarredesign.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.DividerDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.compose.mynavbarredesign.models.OrderUiState
import com.compose.mynavbarredesign.ui.theme.CupcakeTheme
import androidx.compose.ui.platform.LocalResources
import com.compose.mynavbarredesign.models.Helpers

@Composable
fun OrderSummaryScreen(
    orderUiState: OrderUiState,
    onCancelButtonClicked: () -> Unit,
    onSendButtonClicked: (String, String) -> Unit,
    modifier: Modifier = Modifier
) {
    val buttons = Helpers.MapsOfStrings["Buttons"] ?: emptyList()

    val numberOfCupcakes = "%d$orderUiState.quantity" +
     "cupcakes %d$orderUiState.quantity cupcake"

    //Load and format a string resource with the parameters.
    val orderSummary = "Quantity: %1$orderUiState.quantity" +
            " \nFlavor: %2$orderUiState.flavor" +
            " \nPickup date: %3$orderUiState.date" +
            " \nTotal: %4 \n\nThank you!"
    val newOrder = "New Cupcake Order"
    //Create a list of order summary to display
    val items = listOf(
        // Summary line 1: display selected quantity
        Pair("Quantity", numberOfCupcakes),
        // Summary line 2: display selected flavor
        Pair("Flavor", orderUiState.flavor),
        // Summary line 3: display selected pickup date
        Pair("Pickup date", orderUiState.date)
    )

    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.SpaceBetween
    ) {
        Column(
            modifier = Modifier.padding(
                16.dp),
            verticalArrangement = Arrangement.spacedBy(
                6.dp)
        ) {
            items.forEach { item ->
                Text(item.first.uppercase())
                Text(text = item.second, fontWeight = FontWeight.Bold)
                HorizontalDivider(Modifier,
                    thickness = 1.dp, color = DividerDefaults.color)
            }
            Spacer(
                modifier = Modifier
                    .height(6.dp))
            FormattedPriceLabel(
                subtotal = orderUiState.price,
                modifier = Modifier.align(Alignment.End)
            )
        }
        Row(
            modifier = Modifier
                .padding(16.dp)
        ) {
            Column(
                verticalArrangement =
                    Arrangement.spacedBy(6.dp)
            ) {
                Button(
                    modifier = Modifier.fillMaxWidth(),
                    onClick = { onSendButtonClicked(newOrder, orderSummary) }
                ) {
                    Text("Send")
                }
                OutlinedButton(
                    modifier = Modifier.fillMaxWidth(),
                    onClick = onCancelButtonClicked
                ) {
                    Text("Cancel")
                }
            }
        }
    }
}

@Preview
@Composable
fun OrderSummaryPreview() {
    CupcakeTheme {
        OrderSummaryScreen(
            orderUiState = OrderUiState(0,
                "Test", "Test", "$300.00"),
            onSendButtonClicked = { subject: String, summary: String -> },
            onCancelButtonClicked = {},
            modifier = Modifier.fillMaxHeight()
        )
    }
}