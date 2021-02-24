const React = require('react')
const GlobalProvider = require('./src/context/GlobalProvider');
const ProductProvider = require('./src/context/ProductProvider')

exports.wrapPageElement = ({element}) => {
  return(
    <GlobalProvider><ProductProvider>{element}</ProductProvider></GlobalProvider>
  )
}

exports.wrapRootElement = ({ element }) => {
   return (
     <GlobalProvider><ProductProvider>{element}</ProductProvider></GlobalProvider>
   );
 }

 