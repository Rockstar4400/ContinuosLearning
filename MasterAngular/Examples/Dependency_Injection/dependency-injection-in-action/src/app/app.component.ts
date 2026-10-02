import { Component } from '@angular/core';

import { LoggerService } 
from './services/logger.service';
import { UserContextService } 
from './services/user-context.service';
import { HeroBiosAndContactsComponent, HeroBiosComponent } 
from './components/hero-bios.component';
import { HeroOfTheMonthComponent } 
from './components/hero-of-the-month.component';
import { HeroesBaseComponent, SortedHeroesComponent } 
from './components/sorted-heroes.component';
import { ParentFinderComponent } 
from './components/parent-finder.component';
import { StorageComponent } 
from './components/storage.component';
import { HighlightDirective } 
from './directive/highlight.directive';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeroBiosComponent,
    HeroBiosAndContactsComponent,
    HeroOfTheMonthComponent,
    HeroesBaseComponent,
    SortedHeroesComponent,
    ParentFinderComponent,
    StorageComponent,
    HighlightDirective
  ]
})
export class AppComponent {

  private userId = 1;

  constructor(
    logger: LoggerService, 
    public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}
