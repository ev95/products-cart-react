import { useContext } from 'react';

import { ProductSort } from "../../components/ProductSort/ProductSort";
import Product from '../../components/Product/Product'
import { MainContext } from '../../App';
import style from './ProductsPage.module.css'

const ProductsPage = () => {
  const { products, addToCart, sortProducts, searchProduct } = useContext(MainContext)

  return (
    <div className='container'>
      <ProductSort sortProducts={sortProducts} searchProduct={searchProduct} />
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