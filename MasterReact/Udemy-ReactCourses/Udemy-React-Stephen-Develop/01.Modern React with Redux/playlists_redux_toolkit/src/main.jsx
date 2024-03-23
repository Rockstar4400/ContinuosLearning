import ReactDom from 'react-dom/client';
import App from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';
import "bulma/css/bulma.css";

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
