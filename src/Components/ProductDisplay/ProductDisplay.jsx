import "./ProductDisplay.css"
import star from "../Assets/Star.png"
import starEmpty from "../Assets/Star empty.png"
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ShopContext } from "../../Context/ShopContext"
import MoreLikeThis from "../MoreLikeThis/MoreLikeThis"
import { isContentEditable } from "@testing-library/user-event/dist/utils"
import '@fortawesome/fontawesome-free/css/all.css';
import Breadcrumb from "../Breadcrumb/Breadcrumb"

const ProductDisplay = ({product}) => {
  const [count, setCount] = useState(1);
  // const { product } = props; 
  const { addToCart, getTotalCartItems, productsInCart, cartItems} = useContext(ShopContext);
  const [timer1, setTimer1] = useState(null);
  const [timer2, setTimer2] = useState(null);
  const [timer3, setTimer3] = useState(null);
  
  const [mainImg, setMainImg] = useState(product.image);
  const [toastActive, setToastActive] = useState(" toast");
  const [progressActive, setProgressActive] = useState("progress");
  // const [forceRender, setForceRender] = useState(false)

  useEffect(()=>{
    setMainImg(product.image);
  }, [product])
  useEffect(()=>{
    if (getTotalCartItems > 1) {
      clearTimeout(timer1);
    clearTimeout(timer2);
    }
  }, [getTotalCartItems])
  

  const increaseItem = () => {
    setCount(count + 1);
  };

  
  const decreaseItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  

  const handleAddToCart = () => {
    addToCart(product.id, count);
    setCount(1);

    // localStorage.setItem('cart', JSON.stringify(productsInCart));

    setToastActive("toast active");
    setProgressActive(""); 

    clearTimeout(timer1);
    clearTimeout(timer2);

    setTimer1(setTimeout(() => {
        setToastActive("toast");
    }, 5000)); 

    setTimeout(() => {
        setProgressActive("progress active"); 
        setTimer2(setTimeout(() => {
            setProgressActive(""); 
        }, 5000)); 
    }, 100); 
};
const dynamicQuantity = (event) => {

  const newValue = parseInt(event.target.value)
  if (newValue === '' || newValue === '0' || newValue === '-1') { 
    setCount(1);
  } else if (!isNaN(newValue)) {
    setCount(parseInt(newValue));
  }

}

  const handleCloseClick = () => {
    setToastActive("toast")

    setTimeout(() => {
      setProgressActive("progress")
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  };
  
  const updadteimages = (img) => {
    setMainImg(img)
  }

  return (
    <div className="main">
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplayimagelist">
            {[product?.img1, product?.img2, product?.img3, product?.img4].map(
              (img, index) => {
                return (
                  <img
                    key={index}
                    src={img}
                    width={100}
                    height={110}
                    onClick={() => updadteimages(img)}
                    alt=""
                  />
                );
              }
            )}
          </div>
          <div className="productdisplayimg">
            <img
              className="productdisplaymainimage"
              src={mainImg}
              height={470}
              alt=""
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <Breadcrumb />
          <h1>{product.name}</h1>
          <div className="productDisplayRightStar">
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={starEmpty} alt="" />
            </div>
            <p>(122)</p>
          </div>
          <div className="prices">
            <div className="oldprice">${product.oldPrice}</div>
            <div className="newprice">${product.newPrice}</div>
          </div>
          <hr />
          <div className="description">
            <div className="desc">Description</div>
            <div className="propsdesc">{product.desc}</div>
          </div>
          <hr />
          <div className="countercontainer">
            <div
              className="quantity"
              style={{
                display: "flex",
                height: "35px",
                marginTop: "2px",
                width: "100px",
                justifyContent: "space-between",
                borderRadius: "15px",
              }}
            >
              <button
                disabled={count === 1}
                onClick={decreaseItem}
                className="removebtn"
              >
                &nbsp;- &nbsp;
              </button>
              <input
                style={{ width: "40%", left: "30px", border: "none" }}
                type="number"
                name="name"
                value={count}
                onChange={dynamicQuantity}
              />
              <button onClick={increaseItem} className="addbtn">
                &nbsp; + &nbsp;
              </button>
            </div>
            <button
              type="text"
              className="addtocart"
              id="btn"
              onClick={handleAddToCart}
            >
              add to cart
            </button>
          </div>
          <div className={toastActive}>
            <div className="toast-content">
              <i className="fas fa-solid fa-check check"></i>

              <div className="message">
                <span className="text text-1">
                  Your item has been added to cart
                </span>
                {/* <span className="text text-2">Your item has been added to cart</span> */}
              </div>
            </div>
            <i
              className="fa-solid fa-xmark close"
              onClick={handleCloseClick}
            ></i>

            <div className={progressActive}></div>
          </div>
        </div>
      </div>
      <MoreLikeThis />
    </div>
  );
}

export default ProductDisplay;
