import { Component, inject } from '@angular/core';
import { PostsService } from './services/posts.service';
import { DraftPanelComponent } from './draft-panel/draft-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [DraftPanelComponent],
})
export class App {
  protected postsService = inject(PostsService);
}
