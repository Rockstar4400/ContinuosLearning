import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionsComponent } from './components/sections/sections.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news/news-item/news-item.component';
import { NewsService } from './services/news.service';
import { reducers } from './store/reducers';
import { NewsEffects } from './store/effects/news.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsComponent,
    NavbarComponent,
    NewsComponent,
    NewsItemComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([
      NewsEffects
    ]),
    StoreModule.forRoot(reducers),
  ],
  providers: [NewsService,  provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
