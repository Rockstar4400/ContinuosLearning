package com.compose.mynavbarredesign.components


import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.compose.mynavbarredesign.models.Helpers


@Composable
fun CupcakeApp(
    viewModel: OrderViewModel = viewModel(),
    navController: NavHostController = rememberNavController()
) {
    val flavors = Helpers.MapsOfStrings["Flavors"] ?: emptyList()
    Scaffold(
        topBar = {
            CupcakeAppBar(
                canNavigateBack = false,
                navigateUp = { /* TODO: implement back navigation */ }
            )
        }
    ) { innerPadding ->
        val uiState by viewModel.uiState.collectAsState()
        NavHost(
            navController = navController,
            startDestination = "Start",
            modifier = Modifier.padding(innerPadding),
            enterTransition = { fadeIn(
                animationSpec = tween(300)) + slideInHorizontally() },
            exitTransition = { fadeOut(
                animationSpec = tween(300)) + slideOutHorizontally() }
        ) {
            composable(
                route = "Start",
                enterTransition = { scaleIn(
                    animationSpec = tween(400)) },
                exitTransition = { scaleOut(
                    animationSpec = tween(400)) }
            ) {
            StartOrderScreen(
                quantityOptions = Helpers.quantityOptions,
                onNextButtonClicked = { viewModel.setQuantity(it)
                navController.navigate("Flavor") },
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp)
                    )
            }
            composable( route = "Flavor") {
            SelectOptionScreen(
                subtotal = uiState.price,
                onNextButtonClicked = { navController.navigate(
                    "Pick") },
                onCancelButtonClicked = {
                    cancelOrderAndNavigateToStart(viewModel, navController)},
                options = flavors   ,
                onSelectionChanged = { viewModel.setFlavor(it) },
                modifier = Modifier.fillMaxHeight()
            )
            }
            composable( route = "Pick") {
            SelectOptionScreen(
                subtotal = uiState.price,
                onNextButtonClicked = { navController.navigate(
                    "Summary") },
                onCancelButtonClicked = {
                    cancelOrderAndNavigateToStart(viewModel, navController)},
                options = uiState.pickupOptions,
                onSelectionChanged = { viewModel.setDate(it) },
                modifier = Modifier.fillMaxHeight()
            )
            }
            composable(route = "Summary") {
            OrderSummaryScreen(
                orderUiState = uiState,
                onCancelButtonClicked = {
                    cancelOrderAndNavigateToStart(viewModel, navController)},
                onSendButtonClicked = { subject: String, summary: String -> },
                modifier = Modifier.fillMaxHeight()
            )
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CupcakeAppBar(
    canNavigateBack: Boolean,
    navigateUp: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    TopAppBar(
        title = {
            Text(
                context.applicationInfo
                .loadLabel(context.packageManager)
                .toString()) },
            colors = TopAppBarDefaults.topAppBarColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer,
            scrolledContainerColor = Color.Unspecified,
            navigationIconContentColor = Color.Unspecified,
            titleContentColor = Color.Unspecified,
            actionIconContentColor = Color.Unspecified
        ),
        modifier = modifier,
        navigationIcon = {
            if (canNavigateBack) {
                IconButton(onClick = navigateUp) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "Back"
                    )
                }
            }
        }
    )
}
