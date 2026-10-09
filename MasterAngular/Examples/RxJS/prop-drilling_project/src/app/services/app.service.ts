// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes it globally available
})
export class DataService {

  // Option B: Traditional RxJS BehaviorSubject
  private dataStore = new BehaviorSubject<string>('Initial Value');
  
  public readonly currentData$ = this.dataStore.asObservable();

  updateData(newValue: string) { 
    this.dataStore.next(newValue); 
    
    this.currentData$.subscribe({
        next: (data) => console.log('Received data:', data),
        error: (err) => console.error('Error occurred:', err),
        complete: () => console.log('Stream completed!')
    })
}

  }