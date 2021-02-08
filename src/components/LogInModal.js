import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import LogInForm from "./LogInForm";

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

const LogInModal = ({ showLoginModal, handleLoginModal, isLogin, handleIsLogin, setIsLogin}) => {
   const [buttonClicked, setButtonClicked] = useState(false);
   const handleButtonClicked = () => {
      setButtonClicked((prev) => !prev);
   };
   return (
      <>
         {showLoginModal ? (
            <Background>
               <div className="flex flex-col items-center justify-around place-self-center space-y-12">
                  <div className="flex flex-col items-center space-y-4">
                     <h3>{isLogin ? "Log in" : "Sign-up"}</h3>
                     <div className="flex items-center space-x-2">
                        <h6> {isLogin ? "New To this Site?" : "Already a Member?"} </h6>
                        <p>{isLogin ? "Sign-up" : "Log in"}</p>
                     </div>
                  </div>

                  <div className="space-y-6 text-white">
                     <div className="flex space-x-12 items-center bg-blue-800 pr-24 py-2 pl-3 ">
                        <FaFacebookSquare color="white" />
                        <p>{isLogin ? "Log in" : "Sign-up"} with Facebook</p>
                     </div>
                     <div className="flex space-x-12 items-center bg-blue-600 pr-24 py-2 pl-3">
                        <FcGoogle className="bg-white" />
                        <p>{isLogin ? "Log in" : "Sign-up"} with Google</p>
                     </div>
                  </div>
                  <div className="space-y-4 flex flex-col items-center">
                     <div className="flex px-40 space-x-2 items-center">
                        <hr className="w-36 border border-black"></hr>
                        <p>or</p>
                        <hr className="w-36 border border-black"></hr>
                     </div>
                     <button className="border border-black px-24 py-3" onClick={handleButtonClicked}>
                        {" "}
                        {isLogin ? "Log in" : "Sign-up"} with Email
                     </button>
                  </div>
               </div>
               <div
                  className="absolute right-14 top-14"
                  onClick={() => {
                     handleLoginModal();
                     setIsLogin();
                     
                  }}
               >
                  <AiOutlineClose size="2rem" />
               </div>
            </Background>
         ) : null}
         <LogInForm buttonClicked={buttonClicked} isLogin={isLogin} handleButtonClicked={handleButtonClicked} handleLoginModal={handleLoginModal} handleIsLogin={handleIsLogin} showLoginModal={showLoginModal} setIsLogin={setIsLogin}/>
      </>
   );
};

export default LogInModal;
