import React, { useState } from "react";
import './Navbar.css'
import search_icon from "../Assets/search-line.png"
import cart_icon from "../Assets/shopping-cart-2-line.png"
import user_icon from "../Assets/user.png"
import { Link } from "react-router-dom";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
const Navbar = (props) => {
    const [counter, setConter] = useState(0);
    // const {product} = props;
    return(
        <div class="container">
            <div class="logo">store.co</div>

            <ul class="navitems">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/category">On Sale</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
            
            <div className="searchIcon">
                <input placeholder= "Search for products..." type="text" />
                <span className="icondiv">
                    <img className="sicon" src={search_icon} alt="" />
                </span>
            </div>
            <ul class="userauth">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">register</Link></li>
            </ul>
            <div className="cart_icon">
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="cartcount">0</div>
            </div>
            <div className="user_icon">
                <Link to='/profile'><img className="uicon" src={user_icon} alt="" /></Link>
            </div>

        </div>
    )
}

export default Navbar