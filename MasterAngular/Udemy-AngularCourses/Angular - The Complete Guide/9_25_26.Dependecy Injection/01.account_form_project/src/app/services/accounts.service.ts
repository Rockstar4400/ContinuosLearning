import { EventEmitter, inject, Service } from "@angular/core";
import { LoggingService } from "./logging.service";

@Service()
export class AccountsService {
  private LoggingService = inject(LoggingService);
  constructor() {} // ???
  statusUpdated = new EventEmitter<string>(); // ???

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.LoggingService.logAccountAdded(name, status);
    }

    updatedStatus(id: number, status: string, name: string){
        this.accounts[id].status = status;
        this.LoggingService.logStatusChange(status, name);
    }
}