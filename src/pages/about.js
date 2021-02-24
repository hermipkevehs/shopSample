import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const about = () => {
   return (
      <Layout>
         <div className=" text-center my-16 space-y-12">
            <h2>About</h2>
            <div className="mx-28 space-y-1">
               <p>Find the best handmade knit products only on Neri's Handmade Knits Shops.</p>
               <p>
                  Originally started as a hobby by the college student Neri, her passion of giving love and warmth in the form of knit products gave way to what eventually would become her business as "Neri's Handmade Knits". She ought to sell affordable but top quality knit products that the
                  customers will surely love.
               </p>
               <p>Doubt it? Try it!</p>
               <p>
                  Please check out, like, and share our products on our official Facebook Page: 
                  <Link to="https://www.facebook.com/nerishandmadeknits" target="_blank"> Neri's Handmade Knits</Link>
               </p>
            </div>
         </div>
      </Layout>
   );
};

export default about;
