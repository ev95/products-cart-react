import React, { useState } from 'react'
import style from './Product.module.css'
import { useDispatch } from 'react-redux';
import { addToCardAC } from '../../store/cartReducer';

const Product = ({ product, addToCart }) => {
    const [titleLength, setTitleLength] = useState(20);
    const dispatch = useDispatch();

    return (
        <div className={style.product_item}>
            <img src={product.image} alt="Product 1" />
            <h5>{product.title.length >= titleLength ? `${product.title.slice(0, titleLength)}...` : product.title}</h5>
            <div className={style.price}>${product.price}</div>
            <button onClick={() => dispatch(addToCardAC(product))}>Add to Cart</button>
        </div>
    )
}


export default Product