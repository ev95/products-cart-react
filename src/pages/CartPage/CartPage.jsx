import React from 'react'
import style from './CartPage.module.css'
import CartItem from '../../components/CartItem/CartItem'

const CartPage = ({cart}) => {

  return (
    <div>
      {
        cart.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })
      }
    </div>
  )
}

export default CartPage