import React from 'react';
import {connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {  addToCart, loadCurrentItem } from '../../../Redux/reducer/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../Scss/main.css'

const Product = ({product, addToCart}) => {
     
  const notify = () => toast.success('Sucessfully Added to cart !!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return <div className='product col-lg-3 col-md-4 col-6'>
      <div className="product-contents">
        <div className="product_image">
            <img src={product.image} alt={product.title} />
        </div>
        <h2 className="product_title">{product.title}</h2>
        <p className="product_desc">{product.description}</p>
        <h3 className="price">$ {product.price}</h3>
        <div className="btns d-flex justify-content-between">
          <button  onClick={()=> {addToCart(product.id); notify();}}>Add to cart</button>
          <button onClick={product}><Link to={`/product/${product.id}`}>View Item</Link></button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </div>
  </div>;
};

const mapStateToProps = (dispatch) => {

    return{
        addToCart : (id) => dispatch(addToCart(id)),
        loadCurrentItem : (item) =>dispatch(loadCurrentItem(item))
    }

}

export default connect(null, mapStateToProps)(Product);
