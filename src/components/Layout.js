import React from "react";
import { NavbarProvider } from "../context/NavbarProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
   return (
      <NavbarProvider>
         <div className="h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
         </div>
      </NavbarProvider>
   );
};

export default Layout;
