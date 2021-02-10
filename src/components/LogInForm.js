import React, { useContext } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalProvider";

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

const LogInForm = () => {
   const [{ isLogin }] = useContext(GlobalContext);
   return (
      <>
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
               <FaFacebookSquare color="#3b5998" size="2rem" />
               <FcGoogle size="2rem" />
            </div>
         </div>
      </>
   );
};

export default LogInForm;
