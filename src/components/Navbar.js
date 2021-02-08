import React from "react";
import { Link } from "gatsby";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";

const Navbar = () => {
   return (
      <IconContext.Provider value={{ size: "2rem",}}>
         <nav className="bg-black sticky top-0 z-50">
            <div className="px-20 py-10 text-white">
               <div>
                  <ul className="flex space-x-4 justify-end">
                     <li>
                        <FaUserCircle />
                     </li>
                     <li>Log in</li>
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
                     <li><FaFacebook/></li>
                  </ul>
               </div>
            </div>
         </nav>
      </IconContext.Provider>
   );
};

export default Navbar;
