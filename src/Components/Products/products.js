import React from 'react';
import { connect } from "react-redux";
import Product from './product/product';
import '../../Scss/main.css'

const Products = ({products}) => {
  return <div className='products'>
     <div className="container">
     <div className="title-section d-flex justify-content-center">
       <h1>Available Products</h1>
     </div>
    
      <div className="product-lists d-flex flex-wrap pt-5">
        {products.map((product)=>(
            <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  </div>;
};

const mapStateToProps = (state) => {
    return {
      products: state.pReducer.products,
    };
  };
export default connect(mapStateToProps)(Products);
