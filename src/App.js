import { Routes, Route } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

import './App.css';
import CartPage from './pages/CartPage/CartPage';


function App({products}) {

  const [cart, setCart] = useState([]);

  // Add product to cart
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

  // Decrease cart product cuantity
  function decreaseQuantity(product) {
    if (product.count <= 1) return;

    setCart(cart.map((elem) => {
      if (elem.id === product.id) {
        return {
          ...elem,
          count: --elem.count,
          initprice: elem.count * elem.price
        }
      } else {
        return elem
      }
    }))
  }

    // Increment cart product cuantity
  function increaseQuantity(product) {

    setCart(cart.map((elem) => {
      if (elem.id === product.id) {
        return {
          ...elem,
          count: ++elem.count,
          initprice: elem.count * elem.price
        }
      } else {
        return elem
      }
    }))
  }

  // Remov product from cart
  function removeItem(id) {
    setCart([
      ...cart.filter((p) => p.id !== id),
    ]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout cart={cart}/>}>
          <Route index path='/' element={<HomePage /> }/>
          <Route  path='/products' element={<ProductsPage products={products}  addToCart={ addToCart}/> }/>
          <Route  path='/cart' element={<CartPage 
          cart={cart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          removeItem={removeItem}
          />  }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
