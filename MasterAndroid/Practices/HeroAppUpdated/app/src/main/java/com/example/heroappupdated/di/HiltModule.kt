package com.example.heroappupdated.di

import android.content.Context
import androidx.room.Room
import com.example.heroappupdated.data.local.CharacterDao
import com.example.heroappupdated.data.local.CollectionDb
import com.example.heroappupdated.data.local.Constants.DB
import com.example.heroappupdated.data.local.NoteDao
import com.example.heroappupdated.data.remote.ApiService
import com.example.heroappupdated.data.remote.ComicvineApi
import com.example.heroappupdated.data.repository.CharacterRepositoryImpl
import com.example.heroappupdated.domain.repository.CharacterRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
class HiltModule {

    @Provides
    @Singleton
    fun provideComicvineApi(): ComicvineApi = ApiService.api

    @Provides
    @Singleton
    fun provideCollectionDb(@ApplicationContext context: Context): CollectionDb =
        Room.databaseBuilder(context, CollectionDb::class.java, DB)
            .fallbackToDestructiveMigration()
            .build()

    @Provides
    @Singleton
    fun provideCharacterDao(collectionDb: CollectionDb): CharacterDao = collectionDb.characterDao()

    @Provides
    @Singleton
    fun provideNoteDao(collectionDb: CollectionDb): NoteDao = collectionDb.noteDao()

    @Provides
    @Singleton
    fun provideCharacterRepository(
        api: ComicvineApi,
        characterDao: CharacterDao,
        noteDao: NoteDao
    ): CharacterRepository = CharacterRepositoryImpl(api, characterDao, noteDao)
}
