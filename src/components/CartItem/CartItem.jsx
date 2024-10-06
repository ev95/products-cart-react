import React from 'react'
import style from './CartItem.module.css'

const CartItem = ({ cartItem, increaseQuantity, decreaseQuantity, removeItem }) => {

  return (
    <div className={style.cart_item} key={cartItem.id}>
      <img src={cartItem.image} alt="Product Image" className={style.product_image} />
      <div className={style.product_details}>
        <h2 className={style.title}>{cartItem.title} </h2>
        <p className={style.description}>{cartItem.description.slice(0, 100)}..</p>
        <p> ${cartItem.price}</p>
        <div className={style.quantity_container}>
          <button className={style.quantity_btn} onClick={() => decreaseQuantity(cartItem)}>-</button>
          <span className={style.quantity}>{cartItem.count}</span>
          <button className={style.quantity_btn} onClick={() => increaseQuantity(cartItem)}>+</button>
        </div>
      </div>
      <div className={style.product_price}>${cartItem.initprice}</div>

      <div className={style.remove_item}>
        <button onClick={() => removeItem(cartItem.id)}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem