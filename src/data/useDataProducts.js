import { useStaticQuery, graphql } from "gatsby";

export const useDataProducts = () => {
   const {products} = useStaticQuery(graphql`
      query MyProducts {
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
const {nodes} = products
   return nodes;
};
