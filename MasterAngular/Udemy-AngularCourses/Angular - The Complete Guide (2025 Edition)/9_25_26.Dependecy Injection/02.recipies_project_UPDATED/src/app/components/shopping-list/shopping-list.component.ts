import { Component, inject, OnInit } from '@angular/core';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  private slService = inject(ShoppingListService);

  constructor() { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.IngredientChanges
    .subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    )
  }

}
