import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

const TotalPrice = () => {
   const [productstate, dispatch] = useContext(ProductContext);
   const totalPrice = productstate.cartItems.reduce((a, c) => a + c.payload.products.price * Number(c.qty), 0);

   return (
      <React.Fragment>
         {productstate.cartItems.length === 0 ?  <h6>Php {totalPrice}.00</h6> : (
               <h6>Php {totalPrice}.00</h6>
         )}
      </React.Fragment>
   );
};

export default TotalPrice;
