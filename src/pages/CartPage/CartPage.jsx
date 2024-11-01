import { useContext } from 'react';
import CartItem from '../../components/CartItem/CartItem'

import style from './CartPage.module.css'
import { MainContext } from '../../App';
import { useSelector } from 'react-redux';


const CartPage = () => {
  const { decreaseQuantity, increaseQuantity } = useContext(MainContext);
  const { cart } = useSelector((state) => state.cart);

  let total = cart.reduce((accum, prod) => {
    return accum + prod.initprice;
  }, 0);

  console.log(cart, 'cartpahe')
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {
        cart.map((cartItem) => {
          console.log(cartItem, 'cartItem')
          return <CartItem key={cartItem?.id}
            cartItem={cartItem}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity} />
        })
      }

      <div className={style.cart_total}>
        <h3>Total: {total.toFixed(2)}</h3>
      </div>
    </div>

  )

}

export default CartPage