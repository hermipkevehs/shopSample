require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
   pathPrefix: "/shopSample",
   plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-styled-components`,
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `c2jlpkowjo08`,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
         },
      },
   ],
};
