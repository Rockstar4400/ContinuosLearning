import ReactDom from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);


root.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
);
