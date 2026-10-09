import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroy = inject(DestroyRef);
  clickCount = signal(0);
  customInterval$ = new Observable((subscriber) =>{
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if(timesExecuted > 3){
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emmiting value')
      subscriber.next({message: 'New value'});
      timesExecuted++;
    }, 2000);
  });

  constructor(){
    effect(() => {
      console.log(`Clicked button ${this.clickCount()} times` )
    });
  }

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val *2)
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });

    // this.destroy.onDestroy(() => {
    //   subscription.unsubscribe();
    // })

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED')
    });
  }

  onClick(){
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
