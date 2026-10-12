
/*
    Source help:
    https://blog.angular-university.io/functional-reactive-programming-for-angular-2-developers-rxjs-and-observables/
*/

import { interval, tap, take } from 'rxjs';
 

const obs = interval(1000)
           .pipe(
               take(5),
               tap(i => console.log("obs value "+ i) )
           );

obs.subscribe(value => console.log("observer 1 received " + value));

obs.subscribe(value => console.log("observer 2 received " + value));

/*

obs value 0
observer 1 received 0
obs value 0
observer 2 received 0
obs value 1
observer 1 received 1
obs value 1
observer 2 received 1
obs value 2
observer 1 received 2
obs value 2
observer 2 received 2
obs value 3
observer 1 received 3
obs value 3
observer 2 received 3
obs value 4
observer 1 received 4
obs value 4
observer 2 received 4

*/