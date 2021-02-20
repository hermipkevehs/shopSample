import React, { createContext, useReducer, useState } from "react";

const initialState = {
   cartItems: [],
};

export const ProductContext = createContext();

const ProductReducer = (state, action) => {
   switch (action.type) {
      case "ONADD":
         const exist = state.cartItems.find((x) => x.payload.products.slug === action.payload.products.slug);
         if (exist) {
            return { cartItems: state.cartItems.map((x) => (x.payload.products.slug === action.payload.products.slug ? { ...exist, qty: exist.qty + 1 } : x)) };
         } else {
            return { cartItems: [...state.cartItems, { payload: action.payload, qty: 1 }] };
         }
      default:
         return state;
   }
};

export const ProductProvider = ({ children }) => {
   const [productstate, dispatch] = useReducer(ProductReducer, initialState);
   return <ProductContext.Provider value={[productstate, dispatch]}>{children}</ProductContext.Provider>;
};
