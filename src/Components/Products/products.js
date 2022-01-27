import React from 'react';

import { connect } from "react-redux";
import Product from './product/product';

const Products = ({products}) => {
  return <div className='container'>
      {products.map((product)=>(
          <Product key={product.id} product={product}/>
      ))}
  </div>;
};

const mapStateToProps = (state) => {
    return {
      products: state.pReducer.products,
    };
  };
export default connect(mapStateToProps)(Products);
