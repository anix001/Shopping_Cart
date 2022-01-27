import React, { useState } from 'react';
import { adjustQuantity, removeFromCart } from '../../../Redux/reducer/actions';
import {connect} from 'react-redux'

const CartItem = ({item, adjustQuantity, removeFromCart}) => {
   
    const [input, setInput] = useState(item.qty);

    const onChangeHandler =(e)=>{
        setInput(e.target.value);
        adjustQuantity(item.id, e.target.value);
    }

  return <div className='cart-item'>
      <div className="cart-item_image">
          <img src={item.image} alt={item.title} />
      </div>
      <h2 className="cart-item_title">{item.title}</h2>
      <p className="cart-item_desc">{item.desc}</p>
      <h3 className="price">$ {item.price}</h3>
      <div className="cart-item-quantity">
          Quantity 
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
      </div>
      <button onClick={()=> removeFromCart(item.id)}>Remove from cart</button>
  </div>;
};

const mapStateToProps = (dispatch) => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQuantity : (id, value) => dispatch(adjustQuantity(id, value)),
    }
}

export default connect(null, mapStateToProps)(CartItem);
