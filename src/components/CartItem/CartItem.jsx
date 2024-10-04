import React from 'react'
import style from './CartItem.module.css'

const CartItem = ({cartItem}) => {
  return (
    <div>
        <h4>{cartItem.title}</h4>
        <h4>{cartItem.initprice}</h4>
    </div>
  )
}

export default CartItem