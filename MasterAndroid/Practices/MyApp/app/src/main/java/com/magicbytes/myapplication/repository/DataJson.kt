package com.magicbytes.myapplication.repository

import android.content.Context
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.magicbytes.myapplication.model.Exams

fun readLocalJson(context: Context): Exams {
    // 1. Read asset file as a String
    val jsonString = context.assets.open("questions.json")
        .bufferedReader().use {
        it.readText()
    }
    // 2. Parse the string into objects using Gson
    val listType = object : TypeToken<Exams>() {}.type
    return Gson().fromJson(jsonString, listType)
}