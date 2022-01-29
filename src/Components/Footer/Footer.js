import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineTwitter } from 'react-icons/ai';
import {TiShoppingCart} from 'react-icons/ti'
import '../../Scss/main.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-contents">
                    <div className="footer-logo-section">
                        <div className="footer-logo">
                             <Link to="/">Shop Me <TiShoppingCart/></Link>
                        </div>
                        <div className="footer-description">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum distinctio nemo doloribus, 
                            ipsa perferendis, quis tempore animi cum quam iure esse optio. Laborum mollitia optio explicabo quod 
                            exercitationem fugiat, reprehenderit aliquam asperiores adipisci. Reprehenderit temporibus
                             sequi ullam cumque aut perferendis tempore velit quas repudiandae, sed ipsum enim, expedita quae doloribus.
                             </p>
                        </div>
                        <div className="connect-with-us">
                           <AiOutlineTwitter/>
                           <p>Connect with us on twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer