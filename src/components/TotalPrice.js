import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

const TotalPrice = () => {
   const [productstate, dispatch] = useContext(ProductContext);
   const totalPrice = productstate.cartItems.reduce((a, c) => a + c.payload.products.price * Number(c.qty), 0);

   return (
      <>
         {productstate.cartItems.length === 0 ? null : (
            <div className="my-12 ml-12 border-b border-gray-500 w-4/5 pb-5">
               <h4>Subtotal</h4>
               <h5>Php {totalPrice}.00</h5>
            </div>
         )}
      </>
   );
};

export default TotalPrice;
