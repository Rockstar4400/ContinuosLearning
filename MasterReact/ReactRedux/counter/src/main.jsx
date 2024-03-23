import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';


const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);