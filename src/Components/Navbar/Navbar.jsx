import React, { useContext, useEffect, useState } from "react";
import './Navbar.css'
import search_icon from "../Assets/search-line.png"
import cart_icon from "../Assets/Shopping Cart.png"
import user_icon from "../Assets/user.png"
import { Link, useLocation } from "react-router-dom";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { ShopContext } from "../../Context/ShopContext";
import menu from '../Assets/Menu.png'
import closemenu from '../Assets/Close.png'
import Logo from '../Assets/newLogo.png'
const Navbar = (props) => {
    // const [counter, setConter] = useState(0);
    const {getTotalCartItems} = useContext(ShopContext)
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false)
    const [dropdownmenu, setDropdownmenu] = useState("dropdownmenu hidden")
    const [menubar, setMenubar] = useState("menubar unclicked")
    const [logo, setLogo] = useState("logo")
    const [isClicked, setIsCLicked] = useState(false)
    const [menuicon, setMenuicon] = useState(menu)

    useEffect(() => {
        const paths = location.pathname.split('/');
        const path1 = paths[paths.length - 1];
        const path2 = paths[paths.length - 1];
        if (path2 === "cart") {
            setShowHeader(false)
        } else {
            setShowHeader(true)
        };
        if (path1 === "checkout") {
            setMenubar("menubar hidden")
            setLogo("logo rm-ma")
        }
        else{
            setMenubar("menubar unclicked")
            setLogo("logo")
        }
        
    }, [location])
    const hamburgerOn = () => {
        if (!isClicked) {
            setMenubar("menubar clicked");
            setDropdownmenu("dropdownmenu visible");
            setMenuicon(closemenu)
        } else{
            setMenubar("menubar unclicked")
            setDropdownmenu("dropdownmenu hidden")
            setMenuicon(menu)
        }
        setIsCLicked(!isClicked)
    }
    const hideMenuBar = () => {
        setDropdownmenu("dropdownmenu hidden")
        setMenuicon(menu)
    }
        // const hidenav = () => {
        //     window.addEventListener( "scroll", function(){
        //         let scrolled = document.documentElement.scrollTop + document.body.scrollTop;
        //         if (scrolled > 1){
        //             setShowHeader(false)
        //         }else{setShowHeader(true)}
        //     })
        // }
        // hidenav();

    // const {product} = props;
    return(
        showHeader? 
        <div className="navcontainer">
            <div className="burgermenu">
                <button className={menubar} onClick={hamburgerOn}>
                    <img src={menuicon} width={20} height={20}alt=" menu" />
                </button>
            </div>
            <div className={dropdownmenu}>
                <ul>
                    <li onClick={hideMenuBar}><Link to='/'>shop</Link></li>
                    <hr />
                    <li onClick={hideMenuBar}><Link to='/category'>on sale</Link></li>
                    <hr />
                    {/* <li><Link to='/categories'>categories</Link></li> */}
                </ul>
            </div>
            <div className={logo}>
                <Link to="/">
                <img src={Logo} alt="OLLY" />
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
                    <ul className="navitems">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/category">On Sale</Link></li>
                        {/* <li><Link to="/category">Category</Link></li> */}
                    </ul>
                </div>
                <div className="functions">
                    <div className="cart_icon">
                        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                        <div className="cartcount">{getTotalCartItems()}</div>
                    </div>
                    {/* <div className="user_icon">
                        <Link to='/profile'><img className="uicon" src={user_icon} alt="" /></Link>
                    </div> */}
                    
                </div>
            </div>

        </div> :
        <></>
    )
}

export default Navbar