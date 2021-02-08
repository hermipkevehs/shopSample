import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Background, ModalWrapper } from "../styles/ProductStyles";
import Image from "gatsby-image";
const ProductModal = ({ showModal }) => {
   return (
      <>
         {showModal ? (
            <Background>
               <ModalWrapper>
                  {data.product.img.map((image) => {
                     return <Image fluid={image.fluid} style={{ width: "5rem" }} />;
                  })}
               </ModalWrapper>
            </Background>
         ) : null}
      </>
   );
};

export default ProductModal;
