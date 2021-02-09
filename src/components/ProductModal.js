import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Background, ModalWrapper } from "../styles/ProductStyles";
import Image from "gatsby-image";
const ProductModal = ({ showModal, slug }) => {
   const data = useStaticQuery(graphql`
  query Cool  {
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
   return (
      <>
         {showModal ? (
            <Background>
               <ModalWrapper>
            
               </ModalWrapper>
            </Background>
         ) : null}
      </>
   );
};

export default ProductModal;
