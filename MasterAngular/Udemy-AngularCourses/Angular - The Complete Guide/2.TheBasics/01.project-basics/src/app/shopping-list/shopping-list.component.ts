import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingrendients.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent,CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatos', 10),
  ];
}

