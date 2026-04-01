import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logAction(action: string){
    const timeStrap = new Date().toLocaleDateString();
    console.log(`[${timeStrap}: ${action}]`);
  }
}
