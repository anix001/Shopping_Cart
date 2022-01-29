import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem/cartItem';
import '../../Scss/main.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    
    const notify = () => toast.success('Sucessfully Checkout!!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    // const btnClicked = () => {
     
    // }

  return <div className='cart container'>
     <div className="cart-items">
     { cart.length === 0 ? <p className='text-center'>You have not selected any items.</p>  : cart.map((item) => (
             <CartItem key={item.id} item={item}/>
      )) }
         
     </div>
     <div className="cart-summary">
         <h4 className="cart-title">
            Cart Summary
         </h4>
         <div className="summary_price">
            <label>Total</label>
             <span>: ({totalItems} items)</span>
             <span>$ {totalPrice}</span>
         </div>
         <button onClick={()=>{notify()}}>
           Proceed to Checkout
         </button>
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

const mapStateToProps = (state) => {
    return{
        cart: state.pReducer.cart,
    }
}


export default connect(mapStateToProps)(Cart);
