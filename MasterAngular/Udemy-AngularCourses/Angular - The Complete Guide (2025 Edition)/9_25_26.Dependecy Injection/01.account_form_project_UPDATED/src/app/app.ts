import { Component, OnInit, signal } from '@angular/core';
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

  account: { name: string, status: string }[] = [];

  constructor(private AccountsService: AccountsService) {}

  ngOnInit(): void {
    this.account = this.AccountsService.accounts;
  }
}
