import React, { useContext, useEffect, useRef, useState } from "react";
import './Navbar.css'
import search_icon from "../Assets/Search.png"
import cart_icon from "../Assets/Shopping Cart.png"
import user_icon from "../Assets/user.png"
import { Link, useLocation } from "react-router-dom";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { ShopContext } from "../../Context/ShopContext";
import menu from '../Assets/Menu.png'
import closemenu from '../Assets/Close.png'
import Logo from '../Assets/newLogo.png'
import { Button, Drawer } from 'antd';

const Navbar = (props) => {
    // const [counter, setConter] = useState(0);
    const {getTotalCartItems, cart} = useContext(ShopContext)
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false)
    const [dropdownmenu, setDropdownmenu] = useState("dropdownmenu hidden")
    const [menubar, setMenubar] = useState("menubar unclicked")
    const [logo, setLogo] = useState("logo")
    const [isClicked, setIsCLicked] = useState(false)
    const [menuicon, setMenuicon] = useState(menu)
    const [hideCartCount, setHideCartCount] = useState("hidden")
    const [searchClick, setSearchClick] = useState(false)
    const searchInputRef = useRef(null);

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
        };
        if (getTotalCartItems() > 0) {
            setHideCartCount("cartcount")
        }else{
            setHideCartCount("hidden")
        }
        
    }, [location])
    useEffect(() => {
        const cartItemCount = getTotalCartItems()
        if (cartItemCount > 0) {
            setHideCartCount("cartcount");
        } else {
            setHideCartCount("hidden");
        }
    }, [getTotalCartItems]);
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
    const searchtoggle = () => {
        setSearchClick(true)
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          setSearchClick(false);
          searchInputRef.current.value = ''; 
        }
    };

    return showHeader ? (
      <div className="navcontainer">
        <div className="burgermenu">
          <button className={menubar} onClick={hamburgerOn}>
            <img src={menuicon} width={20} height={20} alt=" menu" />
          </button>
        </div>
        <div className={dropdownmenu}>
          <ul>
            <li onClick={hideMenuBar}>
              <Link to="/">shop</Link>
            </li>
            <hr />
            <li onClick={hideMenuBar}>
              <Link to="/category">on sale</Link>
            </li>
            <hr />
            {/* <li><Link to='/categories'>categories</Link></li> */}
          </ul>
        </div>
        <div className={logo}>
          <Link to="/">
            <img src={Logo} alt="OLLY" />
          </Link>
        </div>
        <div>
          {/* <ul class="userauth"> */}

          {/* </ul> */}
          <ul className="navitems">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/category">On Sale</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li><Link to="/category">Category</Link></li> */}
          </ul>
        </div>
        <div className="mobilenav">
          <div className={`search-container ${searchClick ? "show" : "hide"}`}>
            {searchClick && (
              <div className="searchIcon">
                <input
                  placeholder="Search for products..."
                  type="text"
                  ref={searchInputRef}
                  onKeyDown={handleKeyPress}
                />
                <span className="icondiv">
                  <img className="sicon" src={search_icon} alt="" />
                </span>
              </div>
            )}
          </div>
          <img
            src={search_icon}
            alt=""
            style={{
              width: "20px",
              aspectRatio: "2:2",
              height: "20px",
              justifyContent: "center",
              position: "relative",
            }}
            onClick={searchtoggle}
          />
          <div className="functions">
            <div className="cart_icon">
              <Link to="/cart">
                <img src={cart_icon} alt="" />
              </Link>
              <div className={hideCartCount}>{getTotalCartItems()}</div>
            </div>
            <div className="user_icon">
              <Link to="/profile">
                <img className="uicon" src={user_icon} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
}

export default Navbar