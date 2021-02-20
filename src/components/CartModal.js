import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import CartProduct from "./CartProduct";

const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(0,0,0, 0.6);
   position: fixed;
   top: 0;
   z-index: 20;
   display: flex;
   justify-content: flex-end;
`;

const CartModal = ({ cartClicked, setCartClicked }) => {
   return (
      <>
         {cartClicked ? (
            <Background>
               <div className="w-1/3 bg-white">
                  <div className="bg-black text-white flex items-center py-8 space-x-20">
                     <div className="ml-8" onClick={()=>{setCartClicked()}}>
                        <AiOutlineRight size="1.5rem" />
                     </div>
                     <h5 className="">Cart</h5>
                  </div>
                  <CartProduct/>
               </div>
            </Background>
         ) : null}
      </>
   );
};

export default CartModal;
