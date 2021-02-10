import React from "react";
import { GlobalProvider } from "../context/GlobalProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
   return (
      <GlobalProvider>
         <div className="h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
         </div>
      </GlobalProvider>
   );
};

export default Layout;
