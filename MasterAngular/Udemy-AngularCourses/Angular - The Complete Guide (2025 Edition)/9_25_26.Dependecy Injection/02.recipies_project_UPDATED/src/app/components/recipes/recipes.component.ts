import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeDetailComponent, RecipeListComponent],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  private recipeService = inject(RecipeService);

  constructor() {
    this.selectedRecipe = new Recipe ("","","",[])
   }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe)=>
      {
        this.selectedRecipe = recipe;
      })
  }

}
