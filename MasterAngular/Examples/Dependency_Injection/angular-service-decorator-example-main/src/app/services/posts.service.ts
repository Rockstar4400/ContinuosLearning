import { Injectable, Service, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Post, User } from '../models/models';

const BASE = 'https://jsonplaceholder.typicode.com';

// @Injectable({ providedIn: 'root' })
@Service() // ← providedIn: 'root' by default, no config needed
export class PostsService {
  selectedUserId = signal<number | null>(null);

  users = httpResource<User[]>(() => `${BASE}/users`, 
  { defaultValue: [] });

  posts = httpResource<Post[]>(() => {
    const id = this.selectedUserId();
    if (!id) { 
      return undefined;
    }
    return `${BASE}/posts?userId=${id}`;
  }, { defaultValue: [] });

  // constructor(private http: HttpClient) {
  // }
}