import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const LoginMain = () => {
   const [{isLogin}, dispatch] = useContext(GlobalContext)
   return (
      <>
      <div className="space-y-6 text-white">
      <div className="flex space-x-12 items-center bg-blue-800 pr-24 py-2 pl-3 ">
         <FaFacebookSquare color="white" size="2rem" />
         <p>{isLogin ? "Log in" : "Sign-up"} with Facebook</p>
      </div>
      <div className="flex space-x-12 items-center bg-blue-600 pr-24 py-2 pl-3">
         <FcGoogle className="bg-white" size="2rem" />
         <p>{isLogin ? "Log in" : "Sign-up"} with Google</p>
      </div>
   </div>
   <div className="space-y-4 flex flex-col items-center">
      <div className="flex px-40 space-x-2 items-center">
         <hr className="w-36 border border-black"></hr>
         <p>or</p>
         <hr className="w-36 border border-black"></hr>
      </div>
      <button className="border border-black px-24 py-3" onClick={() => dispatch({type:"SETBUTTON"})}>
         {isLogin ? "Log in" : "Sign-up"} with Email
      </button>
   </div>
      </>
   )
}

export default LoginMain
