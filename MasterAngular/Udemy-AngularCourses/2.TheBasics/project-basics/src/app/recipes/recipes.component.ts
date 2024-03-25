import { Component } from '@angular/core';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipesDetailComponent,RecipesListComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
