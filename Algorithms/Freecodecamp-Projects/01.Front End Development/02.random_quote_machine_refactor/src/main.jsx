import { Provider } from 'react-redux';
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store';
import { StrictMode } from 'react';

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
    
root.render(
    <StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </StrictMode>
);
