import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, CommonModule]
})
export class HeroDetailComponent {

  constructor() {
    this.hero = {
      id: 0,
      name: ''
    }
  }

  @Input() hero: Hero;

}
