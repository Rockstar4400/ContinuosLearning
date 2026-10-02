import { Component, inject } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-new-account',
  standalone: true,
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  private accountsService = inject(AccountsService);

  constructor() {
      this.accountsService.statusUpdated.subscribe(
        (status: string) =>
          alert('New Status: ' + status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
