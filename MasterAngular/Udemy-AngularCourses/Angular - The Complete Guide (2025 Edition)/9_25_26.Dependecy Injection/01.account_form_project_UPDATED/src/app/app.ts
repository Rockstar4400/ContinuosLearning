import { Component, inject, OnInit, signal } from '@angular/core';
import { AccountComponent } from './components/account/account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';

@Component({
  imports: [
    AccountComponent,
    NewAccountComponent
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  protected readonly title = signal('01.account_form_project_UPDATED');
  private AccountsService = inject(AccountsService);
  
  account: { name: string, status: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.account = this.AccountsService.accounts;
  }
}
