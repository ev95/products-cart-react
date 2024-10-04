import React, { useState } from 'react'
import style from './Product.module.css'

const Product = ({ product, addToCart }) => {
    const [titleLength, setTitleLength] = useState(15);

    return (
        <div className={style.product}>
            <h3>{product.title.length >= titleLength ? `${product.title.slice(0, titleLength)}...` : product.title}</h3>
            <b>{product.price}$</b>
            <img src={product.image} />
            <button onClick={() => addToCart(product)}>add to cart</button>
        </div>
    )
}

export default Product