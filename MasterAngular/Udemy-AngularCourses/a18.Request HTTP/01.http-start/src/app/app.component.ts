import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = '';
  private errorSub: Subscription;

  constructor(
    private http: HttpClient,
    private postService: PostService, 
    ) {
      this.errorSub = Subscription.EMPTY;
    }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error= error.message;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStore(postData.title, postData.content);
    this.onFetchPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe({
      next: responseData =>
        this.loadedPosts = responseData,
      error: error =>
        console.log(error.message),
      complete: () =>
        this.isFetching = false
    });
  }

  onHandledError(){
   this.error=''; 
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }
  ngOnDestroy() {
      this.errorSub.unsubscribe();
  }
}
