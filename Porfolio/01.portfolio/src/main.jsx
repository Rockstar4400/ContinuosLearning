import * as React from 'react';
import ReactDom from 'react-dom/client';
import './main.scss';
import 'normalize.css';
import imagesLoaded from 'imagesloaded';
import { PieceMaker } from './model/PieceMaker';
import { GlitchFx } from './model/GlitchFx';
import Template from './components/Template';
import { wordsToLetters, switchContent, switchOverlay } 
from './utils/Helpers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Current from './components/CurrentProjects';
import Experience from './components/Experience';
import About from './components/About';

const App = () => {

React.useEffect(() => {

	/* #region DOM */

	const DOM = {};
	//The default mode.
	let mode = 'design',
	disablePageFx, isAnimating, pm, gfx;
	DOM.body = document.querySelector('#template');
	DOM.loading = document.querySelector('.loading');
	
	DOM.switchCtrls = document.querySelector('.switch');
	DOM.switchModeCtrls = {
		'design' : DOM.switchCtrls.firstElementChild,
		'code' : DOM.switchCtrls.lastElementChild
	};
	DOM.pieces = document.querySelector('.pieces');
	DOM.glitchElems = document.querySelectorAll('[data-glitch]');
	DOM.contact = {
		el: document.querySelector('.contact-link')
	};
	DOM.title = {
		el: document.querySelector('.title > .title__inner')
	};
	DOM.menuCtrl = document.querySelector('.btn--menu');
	DOM.menu = {
		'design' : {
			'wrapper': document.querySelector('.menu'),
			'items': document.querySelector('.menu').
			firstElementChild.querySelectorAll('.menu__inner a')
		},
		'code' : {
			'wrapper': document.querySelector('.menu--code'),
			'items': document.querySelectorAll('.menu--code > .menu__inner a')
		}
	};
	DOM.overlay = document.querySelector('.overlay');
	
	/* #endregion DOM */

    const initEvents = () => {
		DOM.switchModeCtrls.design.
		addEventListener('click', switchMode);
		DOM.switchModeCtrls.code.
		addEventListener('click', switchMode);

		const pauseFxFn = function() {
				pm.stopLoopFx();
				gfx.stopGlitch();
				pm.removeTilt();
			  },
			  playFxFn = function() {
				pm.loopFx();
				if( gfx.isInactive ) {
					gfx.glitch();
				}
				pm.initTilt();
			  },
			  contactMouseEnterEvFn = function(ev) {
				if( isAnimating ) return false;
				if( mode === 'design' ) {
					pauseFxFn();
				}
				pm.fxCustom(mode === 'design' ? 'left' : 'right');
			  },
			  contactMouseLeaveEvFn = function(ev) {
			  	if( isAnimating || !pm.fxCustomTriggered ) return false;
				pm.fxCustomReset(mode === 'design' ? 'left' : 'right', function() {
					if( !disablePageFx ) {
						playFxFn();
					}
				});
			  },
			  switchMouseEnterEvFn = function(ev) {
				if( disablePageFx || isAnimating ) return;
				pauseFxFn();
			  },
			  switchMouseLeaveEvFn = function(ev) {
				if( disablePageFx || isAnimating ) return;
				playFxFn();
			  };
		
		DOM.contact.el.addEventListener('mouseenter', contactMouseEnterEvFn);
		DOM.contact.el.addEventListener('mouseleave', contactMouseLeaveEvFn);
		DOM.switchCtrls.addEventListener('mouseenter', switchMouseEnterEvFn);
		DOM.switchCtrls.addEventListener('mouseleave', switchMouseLeaveEvFn);
	}

    const switchMode = (ev) => {
		ev.preventDefault(ev.target);
	
		if( isAnimating ) {
			return false;
		}
		isAnimating = true;
		
		// mode: design||code.
		mode = ev.target === DOM.switchModeCtrls.code ? 'code' : 'design';
		switchOverlay(DOM, mode);
	
		if( mode === 'code' ) {
			disablePageFx = true;
			pm.removeTilt();
			pm.stopLoopFx();
			gfx.stopGlitch();
		}
		
		// Change current class on the designer/coder links.
		DOM.switchModeCtrls[mode === 'code' ? 'design' : 'code']
		.classList.remove('switch__item--current');
		DOM.switchModeCtrls[mode].classList.add('switch__item--current');
		
		// Switch the page content.
		switchContent(DOM, mode);
	
		// Animate the pieces. #Issue 1
		pm.animatePieces(mode === 'code' ? 'out' : 'in', function() {
			isAnimating = false;
			if( mode === 'design' ) {
				pm.initTilt();
				pm.loopFx();
				gfx.glitch();
				disablePageFx = false;
			}
		});
	}
    
    const init = () => {
		imagesLoaded(DOM.body, { background: true }, function() {
			// Remove page loader.
			DOM.loading.classList.add('loading--hide');
			// Create the image pieces.
			pm = new PieceMaker(DOM.pieces);
			// Start the squares loop effect on the main image.
			pm.loopFx();
			// Glitch effect on some elements (title, contact and coder link) in the page.
			gfx = new GlitchFx(DOM.glitchElems);
			// Split the title, contact and code menu items into spans/letters.
			wordsToLetters(DOM);
			// Init/Bind events
			initEvents();
		});
	}

	init();
}
, [ 
]
);

  return (
    <div>
      <BrowserRouter>
        <Routes>
        	<Route 
			path="/" 
			exact 
			element={ 
				<Template 
				/> }
			>
			</Route>
			<Route 
			path="/Blog" 
			exact 
			element={ 
				<Blog 
				/> }
			>
			</Route>
			<Route 
			path="/Skills" 
			exact 
			element= { 
				<Skills 
				/> }
			>
			</Route>
			<Route 
			path="/Portfolio" 
			exact 
			element={ <Portfolio
				/> }
			>
			</Route>
			<Route 
			path="/Current" 
			exact 
			element={ <Current 
				/> }
			>
			</Route>
			<Route 
			path="/Experience" 
			exact 
			element={ <Experience 
				/> }
			>
			</Route>
			<Route 
			path="/About" 
			exact 
			element={ <About 
				/> }
			>
			</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
