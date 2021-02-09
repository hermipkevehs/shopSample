import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import ProductModal from "./ProductModal";

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
               slug
            }
         }
      }
   `);

   const [showModal, setShowModal] = useState(false);
   const handleModalClick = () => {
      setShowModal((prev) => !prev);
   };
   return (
      <section className="grid md:grid-cols-3 place-items-center my-12 gap-y-8">
         {data.products.nodes.map((product) => {
            return (
               <article className="place-items-center grid group">
                  <div className="relative overflow-hidden text-center">
                     <Image fluid={product.img[0].fluid} style={{ width: "20rem" }} />
                     <div className="absolute top-100 h-full w-full transition group-hover:bg-gray-400 group-hover:duration-75 group-hover:top-60 group-hover:ease-in-out opacity-60 cursor-pointer" onClick={handleModalClick}>
                        <h6 className="text-black transform translate-y-72 group-hover:translate-y-8">Quick View</h6>
                     </div>
                  </div>
                  <Link to={`/shop/${product.slug}`}>
                     <h6>{product.productName}</h6>
                     <p>Php {product.price}.00</p>
                  </Link>
                  <ProductModal showModal={showModal} slug={slug}/>
            
               </article>)
              
         })}
      </section>
   );
};

export default Products;
