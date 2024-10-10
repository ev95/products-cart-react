import React from 'react'
import Product from '../../components/Product/Product'

import style from './ProductsPage.module.css'

const ProductsPage = ({ products, addToCart, sortProducts }) => {

  return (
    <div className='container'>
      <div className={style.sort_container}>
        <label htmlFor="sort-price">Sort by Price:</label>
        <select onChange={(e) => sortProducts(e)} id="sort-price" className={style.sort_select}>
          <option value="reset">Reset</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className={style.products}>
        {
          products.map((product) => {
            return <Product key={product.id} product={product} addToCart={addToCart} />
          })
        }
      </div>
    </div>
  )
}

export default ProductsPage