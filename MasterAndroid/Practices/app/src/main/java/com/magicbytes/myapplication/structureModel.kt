package com.magicbytes.myapplication

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

// Example structure matching your data.json
//data class Exams(
    //val id: Int,
    //val name: String,
    //val chapters: Int
//)
@Serializable
data class Exams(
    @SerialName("name")
    val name: String,
)
data class UsersResponse(
    val exams: List<Exams>
)

