import Product from '../../components/Product/Product'

import style from './ProductsPage.module.css'
import { ProductSort } from "../../components/ProductSort/ProductSort";

const ProductsPage = ({ products, addToCart, sortProducts, searchProduct }) => {

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