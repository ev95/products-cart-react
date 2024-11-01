import { act } from "react";

const ADD_TO_CARD = "ADD_TO_CARD";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initState = {
  cart: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CARD: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: [state.cart.filter((p) => p.id !== action.payload)],
      };
    }
    default:
      return state;
  }
};

// const addToCart = (cart, item) => {
//   debugger;
//   console.log(cart);
//   let isContain = false;

//   cart.forEach((cartProduct) => {
//     debugger;
//     if (cartProduct.id === item.id) {
//       isContain = true;
//       return cart.map((elem) => {
//         if (elem.id === cartProduct.id) {
//           return {
//             ...elem,
//             count: ++elem.count,
//             initprice: elem.count * elem.price,
//           };
//         } else {
//           return elem;
//         }
//       });
//     }
//   });

//   if (!isContain) {
//     return [...cart, item];
//   }
// };

export const addToCardAC = (data) => ({ type: ADD_TO_CARD, payload: data });
export const removeFromCartAC = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});

export default cartReducer;
