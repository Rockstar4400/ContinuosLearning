package com.magicbytes.myapplication.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Exams(
    @SerialName("exams")
    val exams: List<Exam>,
    @SerialName("miscChapters")
    val miscChapters: List<MiscChapter>
)

@Serializable
data class Exam(
    val id: Int,
    val name: String,
    @SerialName("chapters")
    val chapters: List<Chapters>,
    @SerialName("unsortedQuestions")
    val unsortedQuestions: List<UnsortedQuestions>
)

@Serializable
data class MiscChapter(
    val id: Int,
    val name: String,
    @SerialName("examQuestions")
    val examQuestions: List<ExamQuestions>,
)

@Serializable
data class ExamQuestions(
    val id: Int,
    val questionText: String,
    val code: String,
    val explanation: String,
    @SerialName("answers")
    val answers: List<Answers>,
    @SerialName("correctAnswerIds")
    val correctAnswerIds: List<Int>
)

@Serializable
data class Chapters(
    val id: Int,
    val name: String,
    @SerialName("examQuestions")
    val examQuestions: List<UnsortedQuestions>
)

@Serializable
data class UnsortedQuestions(
    val id: Int,
    val questionText: String,
    val code: String,
    val explanation: String,
    @SerialName("answers")
    val answers: List<Answers>,
    @SerialName("correctAnswerIds")
    val correctAnswerIds: List<Int>
)

@Serializable
data class Answers(
    val id: Int,
    val textAnswer: String,

)
