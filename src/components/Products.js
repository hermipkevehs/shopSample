import React from "react";
import Image from "gatsby-image";
import { useDataProducts } from "../data/useDataProducts";
import { Link } from "gatsby";

const Products = () => {
   const products = useDataProducts();

   return (
      <section className="grid md:grid-cols-3 place-items-center my-12 gap-y-8">
         {products.map((product, index) => {
            return (
               <article className="place-items-center grid group" key={index}>
                  <Link to={`/shop/${product.slug}`}>
                     <div className="relative overflow-hidden text-center">
                        <Image fluid={product.img[0].fluid} style={{ width: "20rem" }} />
                        <div className="absolute top-100 h-full w-full transition group-hover:bg-gray-300 group-hover:duration-75 group-hover:top-60 group-hover:ease-in-out opacity-60 cursor-pointer">
                           <h6 className="text-black font-semibold transform translate-y-72 group-hover:translate-y-8">View Item</h6>
                        </div>
                     </div>
                     <h6>{product.productName}</h6>
                     <p>Php {product.price}.00</p>
                  </Link>
               </article>
            );
         })}
      </section>
   );
};

export default Products;
