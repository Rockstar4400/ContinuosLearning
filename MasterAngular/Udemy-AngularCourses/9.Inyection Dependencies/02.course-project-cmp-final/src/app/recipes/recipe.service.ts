import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
[
    new Ingredient('Meat',1),
    new Ingredient('Tomatos', 2),]),
    new Recipe('A Test Recipe',
     'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
        new Ingredient('Tomatos', 2),
        new Ingredient('Meat',1)
     ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }
    
    addIngredientsShopping(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }
}