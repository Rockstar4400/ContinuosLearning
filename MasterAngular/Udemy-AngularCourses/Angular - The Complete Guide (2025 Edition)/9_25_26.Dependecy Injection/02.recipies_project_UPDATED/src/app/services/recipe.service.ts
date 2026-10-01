import { EventEmitter, inject, Injectable, Service } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Recipe } from "../models/recipe.model";

@Service()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
private slService = inject(ShoppingListService);

private recipes: Recipe[] = [
    new Recipe(
    1,
    'A Test Recipe', 
    'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
[
    new Ingredient(1,'Meat',1),
    new Ingredient(2,'Tomatos', 2),]),
    new Recipe(
     2 ,'A Test Recipe',
     'This is simply a test', 
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
        new Ingredient(1,'Tomatos', 2),
        new Ingredient(2, 'Meat',1)
     ])
    ];

    constructor() {}

    getRecipes() {
        return this.recipes.slice();
    }
    
    addIngredientsShopping(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }
}