const React = require('react')
const GlobalProvider = require('./src/context/GlobalProvider');
const ProductProvider = require('./src/context/ProductProvider')

exports.wrapRootElement = ({ element }) => {
   return (
     <GlobalProvider><ProductProvider>{element}</ProductProvider></GlobalProvider>
   );
 }

 