import { useContext } from 'react';
import CartItem from '../../components/CartItem/CartItem'

import style from './CartPage.module.css'
import { MainContext } from '../../App';


const CartPage = () => {
  const { cart, removeItem, decreaseQuantity, increaseQuantity } = useContext(MainContext);

  let total = cart.reduce((accum, prod) => {
    return accum + prod.initprice;
  }, 0);



  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {
        cart.map((cartItem) => {
          return <CartItem key={cartItem.id}
            cartItem={cartItem}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            removeItem={removeItem} />
        })
      }

      <div className={style.cart_total}>
        <h3>Total: {total.toFixed(2)}</h3>
      </div>
    </div>

  )

}

export default CartPage