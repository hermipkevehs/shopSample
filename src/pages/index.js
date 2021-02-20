import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";

const index = () => {
   return (
      <Layout>
         <Header />
         <ProductCarousel/>
      </Layout>
   );
};

export default index;
