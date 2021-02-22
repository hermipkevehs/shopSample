import { useStaticQuery, graphql } from "gatsby";

export const useFeaturedProducts = () => {
   const { featured } = useStaticQuery(graphql`
      query FeaturedProducts {
         featured: allContentfulECommerce(filter: { featured: { eq: true } }) {
            nodes {
               productName
               img {
                  fluid {
                     ...GatsbyContentfulFluid
                  }
               }
               price
               slug
            }
         }
      }
   `);
   const { nodes } = featured;
   return nodes;
};
