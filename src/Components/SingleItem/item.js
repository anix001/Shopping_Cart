import React from 'react';
import {connect } from 'react-redux'
import { addToCart } from '../../Redux/reducer/actions';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Item = ({current, addToCart}) => {
  return <div>
      <Navbar/>
      <div className="item-contents">
        <div className="item_image">
            <img src={current.image} alt={current.title} />
        </div>
        <h2 className="item_title">{current.title}</h2>
        <p className="item_desc">{current.description}</p>
        <h3 className="price">$ {current.price}</h3>
        <div className="btns">
          <button onClick={()=> addToCart(current.id)}>Add to cart</button>
        </div>
      </div>
      <Footer/>
  </div>;
};

const mapStateToProps = (state) => {
    return{
        current: state.pReducer.currentItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);


