import charming from "charming";
import anime from "animejs";
import { animateLetters } from '../utils/Utils';

export function wordsToLetters(DOM) {
    // Title.
    charming(DOM.title.el);
    DOM.title.letters = [].slice.call(DOM.title.el.querySelectorAll('span'));
    // Contact.
    charming(DOM.contact.el);
    DOM.contact.letters = [].slice.call(DOM.contact.el.querySelectorAll('span'));
    // Menu items (code mode).
    DOM.menuCodeItemLetters = [];
    [].slice.call(DOM.menu.code.items).forEach(function(item) {
        charming(item);
        DOM.menuCodeItemLetters.push([].slice.call(item.querySelectorAll('span')));
    });
}

export function switchContent(DOM, mode) {
    // Change switchCtrls mode.
    DOM.switchCtrls.classList
    .remove('mode--' + (mode === 'code' ? 'design' : 'code'));
    DOM.switchCtrls.classList.add('mode--' + mode);

    if( mode === 'code' ) {
        switchToCode(DOM);
    }
    else {
        switchToDesign(DOM);	
    }
}

export function switchToCode(DOM) {
    const hideDesign = function(target, callback) {
                let animeOpts = {};

                if( typeof target === 'string' ) {
                    animeOpts.targets = DOM[target].el || DOM[target];
                    animeOpts.duration = 400;
                    animeOpts.easing = 'easeInQuint';
                    animeOpts.scale = 0.3;
                }
                else {
                    animeOpts.targets = target;
                    animeOpts.duration = 100;
                    animeOpts.delay = function(t,i) {
                        return i*100;
                    };
                    animeOpts.easing = 'easeInQuad';
                    animeOpts.translateY = '-75%';
                }
                animeOpts.opacity = {value: 0, easing: 'linear'};
                animeOpts.complete = callback;

                anime.remove(animeOpts.targets);
                anime(animeOpts);
          },
          showCode = function(target) {
                const el = DOM[target].el || DOM[target];
                
                if( target === 'title' || target === 'contact' 
                || target === 'menuCtrl' ) {
                    el.classList.remove('mode--design');
                    el.classList.add('mode--code');
                }
                if( DOM[target].letters ) {
                    animateLetters(DOM[target].letters, 'in', {
                        begin: function() {
                            DOM[target].el.style.opacity = 1;
                            DOM[target].el.style.transform = 'none';
                        }
                    });
                }
                else {
                    el.style.opacity = 1;
                    el.style.transform = 'none';
                }
          };
    // Animate the title, contact, menu ctrl 
    // and menu items out and show the code mode version of these elements.
    // Title:
    hideDesign('title', function() {
        showCode('title');
    });
    // Contact:
    hideDesign('contact', function() {
        showCode('contact');
    });
    // Menu ctrl:
    hideDesign('menuCtrl', function() {
        showCode('menuCtrl');
    });
    // Menu links:
    hideDesign(DOM.menu['design'].items, function() {
        DOM.menu['design'].wrapper.style.display = 'none';
            
        animateLetters(DOM.menuCodeItemLetters, 'in', {
            delay: function(t,i) {
                return i*30
            },
            begin: function() {
                DOM.menu['code'].wrapper.style.display = 'block';
            }
        });
    });
}

export function switchToDesign(DOM) {
    const showDesign = function(target) {
                  let animeOpts = {};

                if( typeof target === 'string' ) {
                    let el = DOM[target].el || DOM[target]
                    
                    el.classList.remove('mode--code');
                    el.classList.add('mode--design');

                    animeOpts.targets = el;
                    animeOpts.duration = 400;
                    animeOpts.easing = 'easeOutQuint';
                    animeOpts.scale = [0.3,1];

                    animeOpts.begin = function() {
                        if( DOM[target].letters !== undefined ) {
                            DOM[target].letters.forEach(function(letter) {
                                letter.style.opacity = 1;
                            });
                        }
                    }
                }
                else {
                    animeOpts.targets = target;
                    animeOpts.duration = 600;
                    animeOpts.delay = function(t,i,c) {
                        return (c-i-1)*100;
                    };
                    animeOpts.easing = 'easeOutExpo';
                    animeOpts.translateY = ['-75%','0%']
                }

                animeOpts.opacity = {value: [0,1], easing: 'linear'};
                
                anime.remove(animeOpts.targets);
                anime(animeOpts);
          };


    // Animate the title, contact, menu ctrl and menu items out and show the design mode version of these elements.
    // Title:
    animateLetters(DOM.title.letters, 'out', {
        complete: function() {
            showDesign('title');
        }
    });
    // Contact:
    animateLetters(DOM.contact.letters, 'out', {
        complete: function() {
            showDesign('contact');
        }
    });
    // Menu ctrl:
    DOM.menuCtrl.style.opacity = 0;
    showDesign('menuCtrl');
    // Menu links:
    animateLetters(DOM.menuCodeItemLetters, 'out', {
        delay: function(t,i,c) {
            return (c-i-1)*10;
        },
        duration: 20,
        complete: function() {
            DOM.menu['code'].wrapper.style.display = 'none';
            DOM.menu['design'].wrapper.style.display = 'block';
            showDesign(DOM.menu['design'].items);
        }
    });
}

export function switchOverlay(DOM, mode) {
    anime.remove(DOM.overlay);
    anime({
        targets: DOM.overlay,
        duration: 800,
        easing: 'linear',
        opacity: mode === 'code' ? 1 : 0
    });
}
