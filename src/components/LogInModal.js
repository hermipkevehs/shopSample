import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import LogInForm from "./LogInForm";
import { GlobalContext } from "../context/GlobalProvider";
import LoginMain from "./LoginMain";

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

const LogInModal = () => {
   const [{ showModal, isLogin, buttonClicked }, dispatch] = useContext(GlobalContext);
   return (
      <>
         {showModal ? (
            <Background>
               <div className="flex flex-col items-center justify-around place-self-center space-y-12">
                  <div className="flex flex-col items-center space-y-4">
                     <h3>{isLogin ? "Log in" : "Sign-up"}</h3>
                     <div className="flex items-center space-x-2">
                        <h6> {isLogin ? "New To this Site?" : "Already a Member?"} </h6>
                        <p className="font-medium cursor-pointer" onClick={()=>dispatch({type:"SETLOGIN"})}>{isLogin ? "Sign-up" : "Log in"}</p>
                     </div>
                  </div>
                  {buttonClicked? <LogInForm/>: <LoginMain/>}
               </div>
               <div className="absolute right-14 top-14 cursor-pointer" onClick={() =>dispatch({type:"RESET"})}>
                  <AiOutlineClose size="2rem" />
               </div>
            </Background>
         ) : null}
      </>
   );
};

export default LogInModal;
