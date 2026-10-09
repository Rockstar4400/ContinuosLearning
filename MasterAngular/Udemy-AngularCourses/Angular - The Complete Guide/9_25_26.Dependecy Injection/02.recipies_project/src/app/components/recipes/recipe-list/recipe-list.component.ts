import { Component, inject, OnInit } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private recipeService = inject(RecipeService);
  recipes: Recipe[];

  constructor() {
    this.recipes = [];
   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
