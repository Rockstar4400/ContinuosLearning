package com.compose.mynavbarredesign.components

import androidx.navigation.NavHostController

public fun cancelOrderAndNavigateToStart(
    viewModel: OrderViewModel,
    navController: NavHostController
) {
    viewModel.resetOrder()
    navController.popBackStack("Start", inclusive = false)
}