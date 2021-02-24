const React = require('react')
const GlobalProvider = require('./src/context/GlobalProvider');
const ProductProvider = require('./src/context/ProductProvider')
require('./src/styles/global.css')

export const wrapRootElement = ({ element }) => {
   return (
     <GlobalProvider><ProductProvider>{element}</ProductProvider></GlobalProvider>
   );
 }

 export const wrapPageElement = ({element}) => {
  return (
    <GlobalProvider><ProductProvider>{element}</ProductProvider></GlobalProvider>
  );
 }