import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { 
    this.recipe = new Recipe("","","",[])
  }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsShopping(this.recipe.ingredients);
  }

}
