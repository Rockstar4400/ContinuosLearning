import { Component, inject, Input } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']})

export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  private accountsService = inject(AccountsService);

  constructor() {
      this.account = {"name": "","status": ""},
      this.id = 0
    }
  
  onSetTo(status: string, name: string) {
    this.accountsService.updatedStatus(this.id, status, name);
    this.accountsService.statusUpdated.emit(status);
  }
}
