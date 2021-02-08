import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #ffffff;
   position: fixed;
   top: 0;
   z-index: 20;
   display: flex;
   justify-content: center;
`;

const LogInForm = ({ isLogin, buttonClicked, handleLoginModal, handleIsLogin, showLoginModal, handleButtonClicked, setIsLogin }) => {
   return (
      <>
         {buttonClicked && showLoginModal ? (
            <Background>
               <div className="flex flex-col items-center justify-around place-self-center space-y-12">
                  <div className="flex flex-col items-center space-y-4">
                     <h3>{isLogin ? "Log in" : "Sign-up"}</h3>
                     <div className="flex items-center space-x-2">
                        <h6> {isLogin ? "New To this Site?" : "Already a Member?"} </h6>
                        <p>{isLogin ? "Sign-up" : "Log in"}</p>
                     </div>
                  </div>
                  <div className="flex flex-col space-y-8">
                     <form action="">
                        <div className="flex flex-col space-y-4">
                           <input type="email" placeholder="E-Mail" className="border border-t-0 border-l-0 border-r-0 border-black placeholder-black pl-2" />
                           <input type="password" placeholder="Password" className="border border-t-0 border-l-0 border-r-0 border-black placeholder-black pl-2" />
                        </div>
                     </form>
                     <button className="border border-black px-28 py-3"> {isLogin ? "Log in" : "Sign-up"}</button>
                  </div>

                  <div className="space-y-4 flex flex-col items-center">
                     <div className="flex px-40 space-x-2 items-center">
                        <hr className="w-28 border border-black"></hr>
                        <p>or {isLogin ? "Log in" : "Sign-up"} with</p>
                        <hr className="w-28 border border-black"></hr>
                     </div>
                     <div className="flex space-x-4">
                        <FaFacebookSquare color="#3b5998" />
                        <FcGoogle />
                     </div>
                  </div>
               </div>
               <div
                  className="absolute right-14 top-14"
                  onClick={() => {
                     handleLoginModal();
                     setIsLogin();
                     handleButtonClicked();
                  }}
               >
                  <AiOutlineClose size="2rem" />
               </div>
            </Background>
         ) : null}
      </>
   );
};

export default LogInForm;
