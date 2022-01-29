import React, { useState } from 'react';
import { adjustQuantity, removeFromCart } from '../../../Redux/reducer/actions';
import {connect} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../Scss/main.css'

const CartItem = ({item, adjustQuantity, removeFromCart}) => {
   
    const [input, setInput] = useState(item.qty);

    const onChangeHandler =(e)=>{
        setInput(e.target.value);
        adjustQuantity(item.id, e.target.value);
    }
    
    const notify = () => toast.info('Item deleted !!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

  return <div className='cart-item d-flex align-items-center justify-content-between'>
      <div className="cart-item_image">
          <img src={item.image} alt={item.title} />
      </div>
      <h2 className="cart-item_title">{item.title}</h2>
      <h3 className="price">$ {item.price}</h3>
      <div className="cart-item-quantity">
          <label className='px-4'>Quantity </label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
      </div>
      <button onClick={()=> {removeFromCart(item.id); notify()}}>Remove from cart</button>
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
  </div>;
};

const mapStateToProps = (dispatch) => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQuantity : (id, value) => dispatch(adjustQuantity(id, value)),
    }
}

export default connect(null, mapStateToProps)(CartItem);
