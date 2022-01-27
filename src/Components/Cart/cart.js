import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem/cartItem';


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

  return <div className='cart container'>
     <div className="cart-items">
         {cart.map((item) => (
             <CartItem key={item.id} item={item}/>
         ))}
     </div>
     <div className="cart-summary">
         <h4 className="cart-title">
            cart Summary
         </h4>
         <div className="summary_price">
             <span>Total : ({totalItems} items)</span>
             <span>$ {totalPrice}</span>
         </div>
         <button>Proceed to Checkout</button>
     </div>
  </div>;
};

const mapStateToProps = (state) => {
    return{
        cart: state.pReducer.cart,
    }
}


export default connect(mapStateToProps)(Cart);
