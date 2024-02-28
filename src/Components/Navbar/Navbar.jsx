import React, { useContext, useEffect, useState } from "react";
import './Navbar.css'
import search_icon from "../Assets/search-line.png"
import cart_icon from "../Assets/shopping-cart-2-line.png"
import user_icon from "../Assets/user.png"
import { Link, useLocation } from "react-router-dom";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { ShopContext } from "../../Context/ShopContext";
import menu from '../Assets/Menu.png'
import Logo from '../Assets/mainn.png'
const Navbar = (props) => {
    // const [counter, setConter] = useState(0);
    const {getTotalCartItems} = useContext(ShopContext)
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        const paths = location.pathname.split('/');
        if (paths.includes("checkout")) {
            setShowHeader(false)
        } else {
            setShowHeader(true)
        }
    }, [location]);

    // const {product} = props;
    return(
        showHeader? 
        <div class="container">
            <div class="logo">
                <Link to="/">
                <img src={Logo} width={70} height={20} alt="OLLY" />
                </Link>
            </div>

            
            
            {/* <div className="searchIcon">
                <input placeholder= "Search for products..." type="text" />
                <span className="icondiv">
                    <img className="sicon" src={search_icon} alt="" />
                </span>
            </div> */}
            {/* <ul class="userauth">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">register</Link></li>
            </ul> */}
            <div className="mobilenav">
                <div>
                    <ul class="navitems">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/category">On Sale</Link></li>
                        <li><Link to="/category">Category</Link></li>
                    </ul>
                </div>
                <div className="functions">
                    <div className="cart_icon">
                        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                        <div className="cartcount">{getTotalCartItems()}</div>
                    </div>
                    <div className="user_icon">
                        <Link to='/profile'><img className="uicon" src={user_icon} alt="" /></Link>
                    </div>
                    <div className="menubar">
                        <img src={menu} width={20} height={20}alt=" menu" />
                    </div>
                </div>
            </div>

        </div> :
        <></>
    )
}

export default Navbar