import React from 'react'
import ReactDom from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './App'

const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<Provider store={store}><App /></Provider>);