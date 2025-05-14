import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string){
    const timeStrap = new Date().toLocaleDateString();
    console.log(`[${timeStrap}: ${message}]`);
  }
}
