import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Post } from './post.model';
import { PostService } from './post.service';

// Help link: https://stackoverflow.com/questions/77483538/angular-17-http-client-injection

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub = '';
 
  constructor( private postService: PostService
             ) {}

  ngOnInit() {
    this.postService.error.subscribe(errorMessage => {
      this.errorSub = errorMessage;
    }
    );

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, 
    error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onCreatePost(postData: Post) {
    // CREATE Http request
    this.postService.createAndStorePost( postData.title, postData.content );
  }

  onFetchPosts() {
    // READ Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {

      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    // DELETE Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(){
    this.postService.error.unsubscribe;
  }
}
