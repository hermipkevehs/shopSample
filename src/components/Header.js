import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Header = () => {
   const data = useStaticQuery(graphql`
      {
         header: contentfulOtherContent(title: { eq: "ecomHeader" }) {
            background {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   `);
   return (
      <div>
         <Image fluid={data.header.background.fluid} />
      </div>
   );
};

export default Header;
