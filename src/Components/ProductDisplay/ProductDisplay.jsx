import "./ProductDisplay.css"
import star from "../Assets/Star.png"
import starEmpty from "../Assets/Star empty.png"
import React, { useContext, useState } from 'react'
import { ShopContext } from "../../Context/ShopContext"
import MoreLikeThis from "../MoreLikeThis/MoreLikeThis"
import { isContentEditable } from "@testing-library/user-event/dist/utils"
import '@fortawesome/fontawesome-free/css/all.css';

const ProductDisplay = (props) => {
  const [count, setCount] = useState(1);
  const { product } = props; 
  const { addToCart} = useContext(ShopContext);
  const [timer1, setTimer1] = useState(null);
  const [timer2, setTimer2] = useState(null);

  const increaseItem = () => {
    setCount(count + 1);
  };

  const decreaseItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  

  const handleAddToCart = () => {
    addToCart(product.id, count); // Add the specified quantity to the cart
    setCount(1); // Reset count to 1 after adding to cart
    const toast = document.querySelector(".toast");
    const progress = document.querySelector(".progress");
    toast.classList.add("active");
    progress.classList.add("active");

    setTimer1(setTimeout(() => {
      toast.classList.remove("active");
    }, 5000)); // 1s = 1000 milliseconds

    setTimer2(setTimeout(() => {
      progress.classList.remove("active");
    }, 5300));
  };
  const buttonEffect =document.getElementsByClassName("addtocart");
  

  const handleCloseClick = () => {
    const toast = document.querySelector(".toast");
    const progress = document.querySelector(".progress");
    const closeIcon = document.querySelector(".close");

    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  };

  return (
    <div className="main">
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplayimagelist" style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <img src={product?.image} width={100} height={110} alt="" />
            <img src={product?.image} width={100} height={110} alt="" />
            <img src={product?.image} width={100} height={110} alt="" />
            <img src={product?.image} width={100} height={110} alt="" />
          </div>
          <div className="productdisplayimg">
            <img className="productdisplaymainimage" src={product?.image} height={470} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product?.name}</h1>
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
            <div className="oldprice">${product?.oldPrice}</div>
            <div className="newprice">${product?.newPrice}</div>
          </div>
          <hr />
          <div className="description">
            <div className="desc">
              Description
            </div>
            <div className="propsdesc">
              {product?.desc}
            </div>
          </div>
          <hr />
          <div className="countercontainer">
            <div className="quantity" style={{ display: "flex", height: "35px",marginTop:"2px", width: "100px", justifyContent:"space-between", borderRadius:"15px"}}>
              <button disabled={count === 1} onClick={decreaseItem} className="removebtn">&nbsp;- &nbsp;</button>
              <input style={{ width: "40%", left:"30px", border:"none" }} type='text' value={count} />
              <button onClick={increaseItem} className="addbtn">&nbsp; + &nbsp;</button >
            </div>
            <button type="text" className="addtocart" id="btn" onClick={handleAddToCart}>add to cart</button>
          </div>
          <div class="toast">
            <div class="toast-content">
              <i class="fas fa-solid fa-check check"></i>

              <div class="message">
                <span class="text text-1">Your item has been added to cart</span>
                {/* <span class="text text-2">Your item has been added to cart</span> */}
              </div>
            </div>
            <i class="fa-solid fa-xmark close" onClick={handleCloseClick}></i>

            <div class="progress"></div>
          </div>
        </div>
      </div>
      <MoreLikeThis />
    </div>
  )
}

export default ProductDisplay;
