import React from "react";
import { useFeaturedProducts } from "../data/useFeaturedProducts";
import { Link } from "gatsby";
import Image from "gatsby-image";

const ProductCarousel = () => {
   const products = useFeaturedProducts();
   return (
      <div className="my-20 space-y-24">
         <h1 className="text-center">Featured Products</h1>
         <div className="flex justify-center space-x-8">
            {products.map((product, index) => {
               return (
                  <article className="place-items-center grid group" key={index}>
                     <div className="relative overflow-hidden text-center">
                        <Image fluid={product.img[0].fluid} style={{ width: "10rem" }} />
                     </div>
                     <Link to={`/shop/${product.slug}`}>
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
