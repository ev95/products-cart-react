import { Routes, Route } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

import './App.css';
import CartPage from './pages/CartPage/CartPage';


function App({products}) {

  const [cart, setCart] = useState([]);

  // addCartFunctional
  const addToCart = (item) => {
    let isContain = false;

    cart.forEach((cartProduct) => {
      if(cartProduct.id === item.id){
        isContain = true;
        setCart(cart.map((elem) => {
          if(elem.id === cartProduct.id){
            return {
              ...elem,
              count : ++elem.count,
              initprice : elem.count * elem.price
            }
          }else {
            return elem
          }
        }))
      }
    })

    if(!isContain){
      setCart([...cart, item])
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout cart={cart}/>}>
          <Route index path='/' element={<HomePage /> }/>
          <Route  path='/products' element={<ProductsPage products={products}  addToCart={ addToCart}/> }/>
          <Route  path='/cart' element={<CartPage cart={cart}/>  }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
