import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Image from "gatsby-image";

const CartProduct = () => {
   const [productstate, dispatch] = useContext(ProductContext);
   console.log(productstate);
   return (
      <div className="mt-4 flex flex-col items-center space-y-4">
         {productstate.cartItems.map((product) => {
            return (
               <div className="flex space-x-3 items-center border-b border-black pb-4 w-4/5" key={product.payload.products.slug}>
                  <div>
                     <Image fluid={product.payload.products.img[0].fluid} style={{ width: "5rem" }} />
                  </div>
                  <div className="flex flex-col flex-wrap space-y-4">
                     <div className="space-y-1">
                        <p>{product.payload.products.productName}</p>
                        <h6>Php {product.payload.products.price}.00</h6>
                     </div>
                     <div className="flex items-center space-x-4 border border-black justify-center w-24">
                        <button className="text-3xl font-semibold">-</button>
                        <h6>{product.qty}</h6>
                        <button className="text-2xl font-semibold" onClick={()=>dispatch({type:"onAdd", payload:product})}>+</button>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default CartProduct;
