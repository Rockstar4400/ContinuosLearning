import { Component, inject } from '@angular/core';
import { DraftPostService } from '../services/draft-post.service';

@Component({
  selector: 'app-draft-panel',
  templateUrl: './draft-panel.component.html',
  styleUrl: './draft-panel.component.css',
  providers: [DraftPostService],
})
export class DraftPanelComponent {
  protected draft = inject(DraftPostService);
}
