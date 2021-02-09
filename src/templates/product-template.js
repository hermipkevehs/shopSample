import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "gatsby-image";
import { IconContext } from "react-icons";
import { Color } from "../styles/ProductStyles";

const ComponentName = ({ data }) => {
   const {
      products: { img, productName, productSize, productColor, price, productInfo, shippingInfo },
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
               <section className="flex space-x-56 justify-center">
                  <div className="space-y-8">
                     <div>
                        <h5 className="font-bold">{productName}</h5>
                        <p className="w-96">{productInfo.productInfo}</p>
                     </div>
                     <div className="space-y-4">
                        <h5>Shipping Info</h5>
                        <h6>Mode of Payment</h6>
                        <form className="flex space-x-8">
                           {shippingInfo.Mode.map((type) => {
                              return (
                                 <div><input type="radio" id={type} /> <label htmlFor={type}>{type}</label></div>
                              );
                           })}
                        </form>
                        <h6>Options</h6>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <h5>Php {price}.00</h5>
                     <div>
                        <h6>Color</h6>
                        <div className="flex space-x-4">
                           {productColor.map((color) => {
                              return <Color color={color.content}></Color>;
                           })}
                        </div>
                     </div>
                     <div className="py-2">
                        <form className="space-y-2">
                        <h6>Size</h6>
                           <select id="sizes" name="sizes" className="text-black pr-8 pl-2 py-4 border border-gray-300">
                              <option value="" disabled selected hidden>
                                 Select Size
                              </option>
                              {productSize.map((size) => {
                                 return <option value={size.content}>{size.content}</option>;
                              })}
                           </select>
                           <h6>Quantity</h6>
                           <input type="number" min="1" max="1000000" className="border border-gray-300 text-center px-0" placeholder="1"/>
                        </form>
                     </div>
                     <button className="bg-blue-400 py-2 px-12">Add to Cart</button>
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
         productColor {
            content
         }
         productInfo {
            productInfo
         }
         productSize {
            content
         }
         shippingInfo {
            Mode
            Options {
               Option_1
               Option_2
               Option_3
            }
         }
      }
   }
`;
