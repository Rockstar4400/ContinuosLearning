package com.compose.mynavbarredesign.models

object Helpers {
    val stringsCustom = listOf(
        Pair("Quantity", 1),
        Pair("Pickup date",2),
        Pair("Total %s",3),
        Pair("New Cupcake Order",4),
        Pair("%d cupcake",5),
        Pair("Cancel", 6)
    )

    val MapsOfStrings = mapOf(
        "Flavors" to listOf(
            "Vanilla",
            "Chocolate",
            "Red velvet"
        ),
        "Options" to listOf(
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ),
/*        "Buttons" to listOf(
            "Next",
            "Cancel"
        )*/

    )

/*    val dimensions = listOf(
        Pair("padding_small", 8),
        Pair("padding_medium", 16),
        Pair("thickness_divider", 1)
    )*/

    val quantityOptions = listOf(
        Pair("One cupcake", 1),
        Pair("Six cupcakes", 6),
        Pair("Twelve", 12)
    )
}

/*enum class CupcakeScreen() {
    Start,
    Flavor,
    Pickup,
    Summary
}*/

/*
sealed class CupcakeScreen() {
    Start = "main_screen"
    object Flavor: Screen("detail_screen")
}*/
