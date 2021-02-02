import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Products = () => {
   const data = useStaticQuery(graphql`
      {
         products: allContentfulECommerce {
            nodes {
               img {
                  fluid {
                     ...GatsbyContentfulFluid
                  }
               }
               price
               productName
            }
         }
      }
   `);
   return (
      <section className="grid md:grid-cols-3 place-items-center mt-12 gap-y-8">
         {data.products.nodes.map((product) => {
            return (
               <article className="place-items-center grid group">
                  <div className="relative overflow-hidden text-center">
                     <Image fluid={product.img[0].fluid} style={{ width: "20rem" }} />
                     <div className="absolute top-40 h-full w-full group-hover:bg-gray-400 opacity-75"><h6 className=" transform translate-y-72 group-hover:translate-y-2">Explore</h6></div>
                  </div>
                  <h6>{product.productName}</h6>
                  <p>Php {product.price}.00</p>
               </article>
            );
         })}
      </section>
   );
};

export default Products;
