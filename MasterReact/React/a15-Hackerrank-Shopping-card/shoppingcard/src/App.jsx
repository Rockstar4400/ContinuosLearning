import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
