import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.6);
   position: fixed;
   top: 0;
   right: 0;
   z-index: 20;
   display: flex;
   justify-content: center;
`;

const Checkout = ({ clicked, handleClicked }) => {
   return (
      <React.Fragment>
         {clicked ? (
            <Background>
               <div className="bg-white w-1/3 h-1/2 self-center flex items-center relative">
                  <div className="flex flex-col flex-wrap items-center space-y-6">
                     <h4 className="text-center mr-2">We are not able to accept online payments</h4>
                     <p>Please contact us to complete your purchase. Thanks.</p>
                     <button onClick={() => handleClicked()} className="bg-black text-white px-5 py-1">
                        Got It
                     </button>
                  </div>
                  <div className="absolute top-5 right-5 cursor-pointer" onClick={() => handleClicked()}>
                     <AiOutlineClose size="1.2rem" />
                  </div>
               </div>
            </Background>
         ) : null}
      </React.Fragment>
   );
};

export default Checkout;
