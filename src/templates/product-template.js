import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "gatsby-image";
import { IconContext } from "react-icons";
import { Color } from "../styles/ProductStyles";

const ComponentName = ({ data }) => {
   const {
      products: { img, productName, shippingInfo, productSize, productInfo, productColor, price },
   } = data;
   console.log(data);

   const [clicked, setClick] = useState(false);

   const handleClick = (index) => {
      index === 0 ? setClick(false) : setClick(true);
   };
   return (
      <Layout>
         <IconContext.Provider value={{ size: "1.5rem" }}>
            <article className="mt-20 ">
               <section className="flex justify-around">
                  <div>
                     <Link> Home </Link>/<Link> Shop </Link> /I am a product
                  </div>
                  <div className="flex items-center">
                     <FaChevronLeft />
                     <span>Prev | Next</span>
                     <FaChevronRight />
                  </div>
               </section>
               <section className="flex flex-col items-center space-y-4 py-24">
                  <div>{clicked ? <Image fluid={img[1].fluid} style={{ width: "40rem" }} /> : <Image fluid={img[0].fluid} style={{ width: "50rem" }} />}</div>
                  <div className="flex space-x-4">
                     {img.map((image, index) => {
                        return (
                           <div onClick={() => handleClick(index)} className="cursor-pointer">
                              <Image fluid={image.fluid} style={{ width: "5rem" }} />
                           </div>
                        );
                     })}
                  </div>
               </section>
               <section className="flex justify-around">
                  <div>
                     <div>
                        <h5>Product Info</h5>
                        <ul>
                           {productInfo.map((info) => {
                              return <li>{info.content}</li>;
                           })}
                        </ul>
                     </div>
                     <div>
                        <h6>Shipping Info</h6>
                        <ul>
                           {shippingInfo.map((info) => {
                              return <li>{info.content}</li>;
                           })}
                        </ul>
                     </div>
                  </div>
                  <div>
                     <h5>Php {price}</h5>
                     <div>
                        <h6>Color</h6>
                        <div className="flex space-x-4">
                           {productColor.map((color) => {
                              return <Color color={color.content}></Color>;
                           })}
                        </div>
                        <div className="space-y-4 py-2">
                           <h6>Quantity</h6>
                           <form >
                              <input type="number" min="1" max="1000000" className="border border-gray-300 text-center px-0"/>
                           </form>
                        </div>
                        <button className="bg-blue-400 py-2 px-12">Add to Cart</button>
                     </div>
                  </div>
               </section>
            </article>
         </IconContext.Provider>
      </Layout>
   );
};

export default ComponentName;

export const query = graphql`
   query getSingleProduct($product: String) {
      products: contentfulECommerce(slug: { eq: $product }) {
         img {
            fluid {
               ...GatsbyContentfulFluid
            }
         }
         price
         productName
         shippingInfo {
            content
         }
         productSize {
            content
         }
         productInfo {
            content
         }
         productColor {
            content
         }
      }
   }
`;
