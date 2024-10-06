import React, { useState } from 'react'
import CartItem from '../../components/CartItem/CartItem'

import style from './CartPage.module.css'

const CartPage = ({ cart }) => {
  const [cartProducts, setCartProducts] = useState(cart);


  function decreaseQuantity(product) {
    if (product.count <= 1) return;

    setCartProducts(cartProducts.map((elem) => {
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

  function increaseQuantity(product) {

    setCartProducts(cartProducts.map((elem) => {
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

  function removeItem(id) {
    setCartProducts([
      ...cartProducts.filter((p) => p.id !== id),
    ]);
  }

  function totalPrice() {
    let total = 0;
    cartProducts.forEach(product => {
      total += product.initprice
    });
    return total.toFixed(2);
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {
        cartProducts.map((cartItem) => {
          return <CartItem key={cartItem.id}
            cartItem={cartItem}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            removeItem={removeItem} />
        })
      }

      <div className={style.cart_total}>
        <h3>Total: {totalPrice()}</h3>
      </div>
    </div>

  )

}

export default CartPage