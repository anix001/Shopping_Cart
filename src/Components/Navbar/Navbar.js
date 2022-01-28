import React from 'react';
import  {connect} from "react-redux";
import { Link } from 'react-router-dom';
import '../../Scss/main.css'
import {TiShoppingCart} from 'react-icons/ti'
import {BsCartCheckFill} from 'react-icons/bs'

const Navbar = (cart) => {
    // const [cartCount, setCartCount] = useState(0);
    // useEffect(()=>{
    //    let count = 0;
    //    cart.forEach((item)=>{
    //        count += item.qty;
    //    });
    //    setCartCount(count);
    // },[cart, cartCount])

  return <div>
      <nav className='d-flex align-items-center'>
          <div className="container">
              <div className="navbar">
                  <div className="logo">
                      <Link to="/">Shop Me <TiShoppingCart/></Link>
                  </div>
                  <div className="nav-items">
                      <Link to="/cart"> 
                      <div className="nav-item">
                      {/*  {cartCount} */}
                      <BsCartCheckFill/>
                      </div></Link>
                  </div>
              </div>
          </div>
      </nav>
  </div>;
};

const mapStateToProps = (state) => {
    return{
        cart:state.pReducer.cart,
    }
}

export default connect(mapStateToProps)(Navbar);
