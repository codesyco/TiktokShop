import "./ProductDisplay.css"
import star from "../Assets/Star.png"
import starEmpty from "../Assets/Star empty.png"
import React from 'react'
import Product   from "../../Pages/Product"
import MoreLikeThis from "../MoreLikeThis/MoreLikeThis"

const ProductDisplay = (props) => {
    const {product} = props; 
  return (
    <div className="main">
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplayimagelist" style={{display:"flex", gap:"10px", flexDirection:"column"}}>
              <img src={product?.image} width={100} height={110} alt="" />
              <img src={product?.image} width={100} height={110} alt="" />
              <img src={product?.image} width={100} height={110} alt="" />
              <img src={product?.image} width={100} height={110} alt="" />
          </div>
          <div className="productdisplayimg">
              <img className="productdisplaymainimage" src={product?.image} width={500} height={470} alt="" />
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
            <div>-</div>
              0
            <div>+</div>
          <button type="text">add to cart</button>
          </div>
        </div>
      </div>
      <MoreLikeThis/>
    </div>
  )
}

export default ProductDisplay;
