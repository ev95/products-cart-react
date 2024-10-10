import { Routes, Route } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

import './App.css';
import CartPage from './pages/CartPage/CartPage';


function App({products}) {

  const [cart, setCart] = useState([]);
  const [productsForSort, setProductsForSort] = useState(products);
  const [isSorted, setIsSorted] = useState(false);


  // Add product to cart
  const addToCart = (item) => {
    let isContain = false;

    cart.forEach((cartProduct) => {
      if(cartProduct.id === item.id){
        isContain = true;
        setCart(cart.map((elem) => {
          if(elem.id === cartProduct.id){
            return {
              ...elem,
              count : ++elem.count,
              initprice : elem.count * elem.price
            }
          }else {
            return elem
          }
        }))
      }
    })

    if(!isContain){
      setCart([...cart, item])
    }
  }

  // Sort products by price
  function sortProducts(e) {
    const sortBy = e.target.value;
    switch (sortBy) {
      case 'asc':
        setIsSorted(true);
        setProductsForSort(productsForSort.toSorted((a,b) => a.price - b.price));
        break;
      case 'desc':
        setIsSorted(true);
        setProductsForSort(productsForSort.toSorted((a,b) => b.price - a.price));
        break;
      default:
        setIsSorted(false);
        setProductsForSort(products);
    }
  }

// Search Products
function searchProduct(text) { 
  let searchResult = [];
  let newText = '';

  if (text.trim()) {
    products.map((p) => {
      const regex = new RegExp(`(${text})`, 'gi');
      if (regex.test(p.title)) {
        console.log(regex.test(p.title), 'regex if');
        // newText = p.title.replace(regex, `<span className='searched'>$1</span>`);
        searchResult = [...searchResult, {
          ...p
          // title: newText
        }];
        setIsSorted(true);
        setProductsForSort(searchResult); 
      } 
      else {
        setIsSorted(false);
        // console.log(' not found', searchResult);
        setProductsForSort(products); 
      }
    } 
  )}
}
  // Decrease cart product cuantity
  function decreaseQuantity(product) {
    if (product.count <= 1) return;

    setCart(cart.map((elem) => {
      if (elem.id === product.id) {
        return {
          ...elem,
          count: --elem.count,
          initprice: elem.count * elem.price
        }
      } else {
        return elem
      }
    }))
  }

  // Increment cart product quantity
  function increaseQuantity(product) {

    setCart(cart.map((elem) => {
      if (elem.id === product.id) {
        return {
          ...elem,
          count: ++elem.count,
          initprice: elem.count * elem.price
        }
      } else {
        return elem
      }
    }))
  }

  // Remov product from cart
  function removeItem(id) {
    setCart([
      ...cart.filter((p) => p.id !== id),
    ]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout cart={cart}/>}>
          <Route index path='/' element={<HomePage /> }/>
          <Route  path='/products' element={<ProductsPage 
          sortProducts={sortProducts} 
          products={ isSorted ? productsForSort : products }  
          searchProduct={searchProduct}
          addToCart={ addToCart}/> }/>
          <Route  path='/cart' element={<CartPage 
          cart={cart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          removeItem={removeItem}
          />  }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
