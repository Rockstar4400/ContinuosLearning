
/*
    Source help:
    https://rxjs.dev/api/index/function/observeOn
*/

import { interval, observeOn, animationFrameScheduler }
from 'rxjs';

const someDiv = document.createElement('div');
someDiv.style.cssText = 'width: 250px;background: #09c';
document.body.appendChild(someDiv);
const intervals = interval(1000);

intervals.pipe(
    observeOn(animationFrameScheduler)
).subscribe(val => {
    someDiv.style.height = val + 'px';
})