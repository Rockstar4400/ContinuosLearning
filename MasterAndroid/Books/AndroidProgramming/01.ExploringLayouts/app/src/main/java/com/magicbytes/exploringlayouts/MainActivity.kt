package com.magicbytes.exploringlayouts

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_menu)
    }

    fun loadConstraintLayout(v: View) {
        setContentView(R.layout.activity_main)
    }

    fun loadTableLayout(v: View) {
        setContentView(R.layout.my_table_layout)
    }

    fun loadMenuLayout(v: View) {
        setContentView(R.layout.main_menu)
    }
}