import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [HeroDetailComponent, CommonModule]
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService) {
      this.selectedHero = {
        id: 0,
        name: ''
      }

    }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
