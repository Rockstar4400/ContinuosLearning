import { Service } from '@angular/core';

@Service()
export class LoggingService {
  logAction(action: string){
    const timeStrap = new Date().toLocaleDateString();
    console.log(`[${timeStrap}: ${action}]`);
  }
}
