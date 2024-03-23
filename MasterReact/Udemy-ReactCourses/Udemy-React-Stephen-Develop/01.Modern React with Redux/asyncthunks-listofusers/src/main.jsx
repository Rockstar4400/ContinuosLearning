import React from 'react'
import ReactDom from 'react-dom/client';
import App from './components/App'
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css'

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );
