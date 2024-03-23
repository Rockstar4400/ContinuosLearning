import anime from "animejs";
// Random number.
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper vars and functions.
export function extend( a, b ) {
    for( var key in b ) { 
        if( b.hasOwnProperty( key ) ) {
            a[key] = b[key];
        }
    }
    return a;
}

// From https://davidwalsh.name/javascript-debounce-function.
export function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// from http://www.quirksmode.org/js/events_properties.html#position
export function getMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) 	{
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
        posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    return {
        x : posx,
        y : posy
    }
}

export function animateLetters(letters, dir, extraAnimeOpts) {
    let animeOpts = {};
    
    animeOpts.targets = letters;
    animeOpts.duration = 50;
    animeOpts.delay = function(t,i,c) {
        return dir === 'in' ? i*50 : (c-i-1)*50;
    };
    animeOpts.easing = dir === 'in' ? 'easeInQuint' : 'easeOutQuint';
    animeOpts.opacity = dir === 'in' ? [0,1] : [1,0];
    extend(animeOpts, extraAnimeOpts);

    anime.remove(animeOpts.targets);
    anime(animeOpts);
}

