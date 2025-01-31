import { Component, OnDestroy, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //standalone: true
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  //private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
    ) {}


  ngOnInit(){
    //this.userSub = 
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });

    console.log(this.isAuthenticated);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authService.userSub.unsubscribe();
  }
}
