import React from "react";
import { useDataProducts } from "../data/useDataProducts";
import { Link } from "gatsby";
import Image from "gatsby-image";

const ProductCarousel = () => {
   const products = useDataProducts();
   return (
      <div>
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
   );
};

export default ProductCarousel;
