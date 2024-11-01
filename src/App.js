import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import axios from "axios";

import Loyout from "./components/Loyout/Loyout";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import { store } from "./store/store.js";

import "./App.css";

export const MainContext = createContext(null);

export const axios_instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsForSort, setProductsForSort] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  // Get Products
  useEffect(() => {
    axios_instance.get("products").then((res) => {
      setProducts(
        res.data.map((el) => {
          return {
            ...el,
            initprice: el.price,
            count: 1,
          };
        })
      );
      setProductsForSort(
        res.data.map((el) => {
          return {
            ...el,
            initprice: el.price,
            count: 1,
          };
        })
      );
    });
  }, []);

  // Add product to cart
  const addToCart = (item) => {
    let isContain = false;

    cart.forEach((cartProduct) => {
      if (cartProduct.id === item.id) {
        isContain = true;
        setCart(
          cart.map((elem) => {
            if (elem.id === cartProduct.id) {
              return {
                ...elem,
                count: ++elem.count,
                initprice: elem.count * elem.price,
              };
            } else {
              return elem;
            }
          })
        );
      }
    });

    if (!isContain) {
      setCart([...cart, item]);
    }
  };

  // Sort products by price
  function sortProducts(e) {
    const sortBy = e.target.value;
    switch (sortBy) {
      case "asc":
        setIsSorted(true);
        setProductsForSort(
          productsForSort.toSorted((a, b) => a.price - b.price)
        );
        break;
      case "desc":
        setIsSorted(true);
        setProductsForSort(
          productsForSort.toSorted((a, b) => b.price - a.price)
        );
        break;
      default:
        setIsSorted(false);
        setProductsForSort(products);
    }
  }

  // Search Products
  function searchProduct(text) {
    let searchResult = [];
    let newText = "";

    if (text.trim()) {
      products.map((p) => {
        // const regex = new RegExp(`(${text})`, "gi");
        // if (regex.test(p.title)) {
        //   console.log(regex.test(p.title), "regex if");
        //   // newText = p.title.replace(regex, `<span className='searched'>$1</span>`);
        //   searchResult = [
        //     ...searchResult,
        //     {
        //       ...p,
        //       // title: newText
        //     },
        //   ];
        //   setIsSorted(true);
        //   setProductsForSort(searchResult);
        // } else {
        //   setIsSorted(false);
        //   // console.log(' not found', searchResult);
        //   setProductsForSort(products);
        // }
      });
    }
  }
  // Decrease cart product cuantity
  function decreaseQuantity(product) {
    if (product.count <= 1) return;

    setCart(
      cart.map((elem) => {
        if (elem.id === product.id) {
          return {
            ...elem,
            count: --elem.count,
            initprice: elem.count * elem.price,
          };
        } else {
          return elem;
        }
      })
    );
  }

  // Increment cart product quantity
  function increaseQuantity(product) {
    setCart(
      cart.map((elem) => {
        if (elem.id === product.id) {
          return {
            ...elem,
            count: ++elem.count,
            initprice: elem.count * elem.price,
          };
        } else {
          return elem;
        }
      })
    );
  }

  return (
    <div className="App">
      <Provider store={store}>
        <MainContext.Provider
          value={{
            cart,
            products: isSorted ? productsForSort : products,
            sortProducts,
            searchProduct,
            addToCart,
            decreaseQuantity,
            increaseQuantity,
          }}
        >
          <Routes>
            <Route path="/" element={<Loyout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes>
        </MainContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
