
import ReactDom from 'react-dom/client';
import App from './components/AppFunction';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
