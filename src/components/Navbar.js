import React, { useState } from "react";
import { Link } from "gatsby";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";
import LogInModal from "./LogInModal";

const Navbar = () => {
   const [showLoginModal, setShowLogin] = useState(false);
   const [isLogin, setIsLogin] = useState(false);

   const handleIsLogin = () => {
      setIsLogin((prev) => !prev);
   };
   const handleLoginModal = () => {
      setShowLogin((prev) => !prev);
   };
   return (
      <IconContext.Provider value={{ size: "2rem" }}>
         <nav className="bg-black sticky top-0 z-10">
            <div className="px-20 py-10 text-white">
               <div>
                  <ul className="flex space-x-4 justify-end">
                     <li onClick={handleLoginModal} className="cursor-pointer">
                        <FaUserCircle />
                     </li>
                     <li
                        onClick={() => {
                           handleLoginModal();
                           handleIsLogin();
                        }}
                        className="cursor-pointer"
                     >
                        Log in
                     </li>
                     <li>
                        <HiOutlineShoppingBag className="text-white">2</HiOutlineShoppingBag>
                     </li>
                  </ul>
               </div>
               <div className="border border-white my-3"></div>
               <div className="flex justify-between">
                  <h4>DANIEL'S KNIT SHOP</h4>
                  <ul className="flex space-x-5 items-center">
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/shop">Shop</Link>
                     </li>
                     <li>About</li>
                     <li>
                        <Link to="/support">Support</Link>
                     </li>
                     <li>
                        <FaFacebook />
                     </li>
                  </ul>
               </div>
            </div>
            <LogInModal showLoginModal={showLoginModal} handleLoginModal={handleLoginModal} isLogin={isLogin} handleIsLogin={handleIsLogin} setIsLogin={setIsLogin} />
         </nav>
      </IconContext.Provider>
   );
};

export default Navbar;
