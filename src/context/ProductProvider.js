import React, { createContext, useReducer, useState } from "react";

const initialState = {
   cartItems: [],
};

export const ProductContext = createContext();

const ProductReducer = (state, action) => {
   switch (action.type) {
      case "ONADD":
         return {cartItems: [...state.cartItems, {payload: action.payload}] }
      default:
         return state;
   }
};

export const ProductProvider = ({ children }) => {
   const [productstate, dispatch] = useReducer(ProductReducer, initialState);
   return <ProductContext.Provider value={[productstate, dispatch]}>{children}</ProductContext.Provider>;
};
