import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";
import LogInModal from "./LogInModal";
import { NavbarContext, NavbarProvider } from "../context/NavbarContext";

const Navbar = () => {
   return (
      <nav className="bg-black sticky top-0 z-10">
         <div className="px-20 py-10 text-white">
            <div>
               <ul className="flex space-x-4 justify-end">
                  <li className="cursor-pointer">
                     <FaUserCircle size="2rem"/>
                  </li>
                  <li className="cursor-pointer">Log in</li>
                  <li>
                     <HiOutlineShoppingBag size="2rem" className="text-white"></HiOutlineShoppingBag>
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
                     <FaFacebook size="2rem"/>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
