import React from 'react';

import {connect } from 'react-redux'
import {  addToCart } from '../../../Redux/reducer/actions';

const Product = ({product, addToCart}) => {
  return <div className='product'>
      <div className="product_image">
          <img src={product.image} alt={product.title} />
      </div>
      <h2 className="product_title">{product.title}</h2>
      <p className="product_desc">{product.desc}</p>
      <h3 className="price">$ {product.price}</h3>
      <button onClick={()=> addToCart(product.id)}>Add to cart</button>
  </div>;
};

const mapStateToProps = (dispatch) => {

    return{
        addToCart : (id) => dispatch(addToCart(id)),
    }

}

export default connect(null, mapStateToProps)(Product);
