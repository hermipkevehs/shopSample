import React from "react";
import { graphql } from "gatsby";

const ComponentName = ({ data }) => {
   const {
      products: { img, productName, shippingInfo, productSize, productInfo, productColor },
   } = data;
   console.log(data)
   return (
      <div>
        {productName}
        {shippingInfo[0].content}
      
      </div>
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
            Black
            White
         }
      }
   }
`;
