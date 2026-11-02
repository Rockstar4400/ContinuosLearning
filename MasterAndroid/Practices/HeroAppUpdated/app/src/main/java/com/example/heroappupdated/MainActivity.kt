package com.example.heroappupdated

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.heroappupdated.presentation.view.CharacterDetailsScreen
import com.example.heroappupdated.presentation.view.CharactersBottomNav
import com.example.heroappupdated.presentation.view.CollectionScreen
import com.example.heroappupdated.presentation.view.Destination
import com.example.heroappupdated.presentation.view.LibraryScreen
import com.example.heroappupdated.presentation.viewmodel.CollectionDbViewModel
import com.example.heroappupdated.presentation.viewmodel.LibraryApiViewModel
import com.example.heroappupdated.ui.theme.HeroAppUpdatedTheme
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            HeroAppUpdatedTheme {
                val navController = rememberNavController()
                CharactersScaffold(navController = navController)
            }
        }
    }
}

@Composable
fun CharactersScaffold(navController: NavHostController) {
    // Hoisting ViewModels to Activity scope to share data across screens
    val lvm: LibraryApiViewModel = hiltViewModel()
    val cvm: CollectionDbViewModel = hiltViewModel()

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        bottomBar = {
            CharactersBottomNav(navController = navController)
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Destination.Library.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Destination.Library.route) {
                LibraryScreen(navController = navController, vm = lvm)
            }
            composable(Destination.Collection.route) {
                CollectionScreen(navController = navController, cvm = cvm)
            }
            composable(Destination.CharacterDetails.route) { navBackStackEntry ->
                val characterIdString = navBackStackEntry.arguments?.getString("characterId")
                Log.d("=====>", "Character ID: $characterIdString")
                val characterId = characterIdString?.toIntOrNull()
                CharacterDetailsScreen(
                    characterId = characterId,
                    navController = navController,
                    lvm = lvm,
                    cvm = cvm
                )
            }
        }
    }
}