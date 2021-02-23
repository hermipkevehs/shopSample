import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import LogInModal from "./LogInModal";
import { GlobalContext } from "../context/GlobalProvider";
import CartModal from "./CartModal";

const Navbar = () => {
   const [navstate, dispatch] = useContext(GlobalContext);
   const [cartClicked, setCartClicked] = useState(false);

   return (
      <nav className="bg-black sticky top-0 z-50">
         <div className="px-20 py-10 text-white">
            <div>
               <ul className="flex space-x-4 justify-end">
                  <li className="cursor-pointer" onClick={() => dispatch({ type: "SETMODAL" })}>
                     <FaUserCircle size="2rem" />
                  </li>
                  <li className="cursor-pointer" onClick={() => dispatch({ type: "LOGINMODAL" })}>
                     Log in
                  </li>
                  <li>
                     <HiOutlineShoppingBag
                        size="2rem"
                        className="text-white cursor-pointer"
                        onClick={() => {
                           setCartClicked(!cartClicked);
                        }}
                     >
                        <h6 className="text-white">2</h6>
                     </HiOutlineShoppingBag>
                  </li>
               </ul>
            </div>
            <div className="border border-white my-3"></div>
            <div className="flex justify-between">
               <h4>NERI'S HANDMADE KNITS</h4>
               <ul className="flex space-x-5 items-center">
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                     <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/support">Support</Link>
                  </li>
                  <li>
                     <Link to="https://facebook.com/nerishandmadeknits" target="_blank">
                        <FaFacebook size="2rem" />
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <LogInModal />
         <CartModal cartClicked={cartClicked} setCartClicked={setCartClicked} />
      </nav>
   );
};

export default Navbar;
