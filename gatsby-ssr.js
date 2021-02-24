import React from "react";
import { GlobalProvider } from "./src/context/GlobalProvider";
import { ProductProvider } from "./src/context/ProductProvider";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
   return (
      <GlobalProvider>
         <ProductProvider>{element}</ProductProvider>
      </GlobalProvider>
   );
};
export const wrapPageElement = ({ element }) => {
   return (
      <GlobalProvider>
         <ProductProvider>{element}</ProductProvider>
      </GlobalProvider>
   );
};
