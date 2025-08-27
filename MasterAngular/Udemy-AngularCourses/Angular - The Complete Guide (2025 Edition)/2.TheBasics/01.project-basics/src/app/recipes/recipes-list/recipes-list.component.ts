import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A test Recipe','test','https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg')
  ];

  constructor(){}

  ngOnInit() {
      
  }
}
