const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions;
   const result = await graphql(`
      query GetProducts {
         products: allContentfulECommerce {
            nodes {
               slug
            }
         }
      }
   `);

   result.data.products.nodes.forEach((product) => {
      createPage({
         path: `/shop/${product.slug}`,
         component: path.resolve(`src/templates/product-template.js`),
         context: {
            product: product.slug,
         },
      });
   })}