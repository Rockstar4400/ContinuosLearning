
import ReactDom from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';

// Help Links: 
// https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
// https://blog.logrocket.com/using-localstorage-react-hooks/
// https://react.dev/learn/responding-to-events

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);
