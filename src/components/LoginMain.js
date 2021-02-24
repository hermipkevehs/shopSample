import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "gatsby";

const LoginMain = () => {
   const [{ isLogin }, dispatch] = useContext(GlobalContext);
   return (
      <React.Fragment>
         <div className="space-y-6 text-white">
            <Link to="https://web.facebook.com/?_rdc=3&_rdr" target="_blank" className="flex space-x-12 items-center bg-blue-800 pr-24 py-2 pl-3 ">
               <FaFacebookSquare color="white" size="2rem" />
               <p>{isLogin ? "Log in" : "Sign-up"} with Facebook</p>
            </Link>
            <Link to="https://accounts.google.com/" target="_blank" className="flex space-x-12 items-center bg-blue-600 pr-24 py-2 pl-3">
               <FcGoogle className="bg-white" size="2rem" />
               <p>{isLogin ? "Log in" : "Sign-up"} with Google</p>
            </Link>
         </div>
         <div className="space-y-4 flex flex-col items-center">
            <div className="flex px-40 space-x-2 items-center">
               <hr className="w-36 border border-black"></hr>
               <p>or</p>
               <hr className="w-36 border border-black"></hr>
            </div>
            <button className="border border-black px-24 py-3" onClick={() => dispatch({ type: "SETBUTTON" })}>
               {isLogin ? "Log in" : "Sign-up"} with Email
            </button>
         </div>
      </React.Fragment>
   );
};

export default LoginMain;
