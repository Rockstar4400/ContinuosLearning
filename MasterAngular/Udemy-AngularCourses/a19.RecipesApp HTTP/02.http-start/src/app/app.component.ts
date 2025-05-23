import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Post } from './post.model';
import { PostService } from './post.service';
import { nextTick } from 'node:process';

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
 
  constructor( private postService: PostService) {}

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
    // Create and update the list on the view
    this.postService.createAndStorePost( postData.title, postData.content );
    this.onFetchPosts();
  }

  onFetchPosts() {
    // READ Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe({
          next: responseData => 
            this.loadedPosts = responseData,
          error: error => 
            console.error(error.message),
          complete: () =>
            this.isFetching = false
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
