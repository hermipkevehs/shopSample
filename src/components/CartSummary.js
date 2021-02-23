import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import Image from "gatsby-image";
import { AiOutlineClose } from "react-icons/ai";
import TotalPrice from "./TotalPrice";
import Checkout from "./Checkout";
import { Link } from "gatsby";

const CartSummary = () => {
   const [productstate, dispatch] = useContext(ProductContext);
   const [clicked, setClicked] = useState(false);

   const handleClicked = () => {
      setClicked((prev) => !prev);
   };

   return (
      <div className="my-24 flex justify-center space-x-20">
         <div className="space-y-10">
            <div className="border-b border-black pb-7">
               <h6>My Cart</h6>
            </div>
            {productstate.cartItems.length === 0 ? (
               <div>
                  <h6>Cart is Empty</h6>
                  <Link to="/shop">Go To Shop</Link>
               </div>
            ) : (
               productstate.cartItems.map((product, index) => {
                  return (
                     <div key={index} className="flex space-x-5 border-b border-black pb-7 relative">
                        <div>
                           <Image fluid={product.payload.products.img[0].fluid} style={{ width: "5rem" }} />
                        </div>
                        <div className="space-y-3">
                           <div>
                              <p>{product.payload.products.productName}</p>
                              <p>Php {product.payload.products.price}.00</p>
                           </div>
                           <div className="flex items-center w-20 border border-black justify-center space-x-3">
                              <button className="text-2xl font-semibold" onClick={() => dispatch({ type: "ONDECREASE", payload: product.payload })}>
                                 -
                              </button>
                              <h6>{product.qty}</h6>
                              <button className="text-xl font-semibold" onClick={() => dispatch({ type: "ONADD", payload: product.payload })}>
                                 +
                              </button>
                           </div>
                        </div>
                        <div>
                           <p>Php {product.payload.products.price * product.qty}.00</p>
                        </div>
                        <div className="absolute -right-8 top-0" onClick={() => dispatch({ type: "ONREMOVE", payload: product.payload })}>
                           <AiOutlineClose size="1.2rem" />
                        </div>
                     </div>
                  );
               })
            )}
         </div>
         <div className="flex flex-col">
            <div className="border-b border-black pb-7">
               <h6>Order Summary</h6>
            </div>
            <div className="flex space-x-12 mt-5 my-4">
               <h6>Total</h6>
               <TotalPrice />
            </div>
            <button className="self-center px-16 py-3 bg-gray-400" onClick={handleClicked}>
               Checkout
            </button>
            <Checkout handleClicked={handleClicked} clicked={clicked} />
         </div>
      </div>
   );
};

export default CartSummary;
