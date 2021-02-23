import React from "react";
import { useFeaturedProducts } from "../data/useFeaturedProducts";
import { Link } from "gatsby";
import Image from "gatsby-image";

const ProductCarousel = () => {
   const products = useFeaturedProducts();
   return (
      <div className="my-20 space-y-24">
         <h1 className="text-center">Featured Products</h1>
         <div className="grid grid-cols-2 gap-y-6 justify-center">
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
         </div>
      </div>
   );
};

export default ProductCarousel;
