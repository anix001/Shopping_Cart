import React from 'react';
import {connect } from 'react-redux'
import {  addToCart } from '../../../Redux/reducer/actions';
import '../../../Scss/main.css'

const Product = ({product, addToCart}) => {
  return <div className='product col-lg-3 col-md-4 col-6'>
      <div className="product-contents">
        <div className="product_image">
            <img src={product.image} alt={product.title} />
        </div>
        <h2 className="product_title">{product.title}</h2>
        <p className="product_desc">{product.description}</p>
        <h3 className="price">$ {product.price}</h3>
        <button onClick={()=> addToCart(product.id)}>Add to cart</button>
      </div>
  </div>;
};

const mapStateToProps = (dispatch) => {

    return{
        addToCart : (id) => dispatch(addToCart(id)),
    }

}

export default connect(null, mapStateToProps)(Product);
