import { Component, ElementRef, 
  inject, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } 
from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef!: ElementRef;
  private slService = inject(ShoppingListService);

  constructor() { 
  }

  ngOnInit() {
  }

  onAddItem(){
    const id = ++this.slService.getIngredients().length;
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(id,ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
