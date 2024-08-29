import React from 'react';
import 'bulma/css/bulma.css';
import './style.css'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store} stabilityCheck="never">
        <App />
    </Provider>

);
