import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
   return (
      <nav className="bg-black sticky top-0 z-50">
         <div className="px-20 py-10 text-white">
            <div>
               <ul className="flex space-x-4 justify-end">
                  <li>icon1</li>
                  <li>Log in</li>
                  <li>Cart</li>
               </ul>
            </div>
            <div className="border border-white my-3"></div>
            <div className="flex justify-between">
               <h4>DANIEL'S KNIT SHOP</h4>
               <ul className="flex space-x-5 items-center">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li>About</li>
                  <li><Link to="/support">Support</Link></li>
                  <li>Icon</li>
               </ul>
            </div>
         </div>   
      </nav>
   )
}

export default Navbar
