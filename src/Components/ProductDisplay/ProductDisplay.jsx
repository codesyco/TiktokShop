import "./ProductDisplay.css"
import star from "../Assets/Star.png"
import starEmpty from "../Assets/Star empty.png"
import React, { useContext, useState } from 'react'
import Product   from "../../Pages/Product"
import MoreLikeThis from "../MoreLikeThis/MoreLikeThis"
import { ShopContext } from "../../Context/ShopContext"

const ProductDisplay = (props) => {
  const [count, setCount] = useState(0);

  const increaseItem = (e) => {
    setCount(count + 1);
  };

  const decreaseItem = (e) => {
    setCount(count - 1);
  };
    const {product} = props; 
    const {addToCart} = useContext(ShopContext);

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
            <div className="quantity" style={{display:"flex", height:"30px", backgroundColor:"grey", width:"90px"}}>
              <button disabled={count === 0} onClick={decreaseItem}>&nbsp;- &nbsp;</button>
                <input style={{width:"30px",display:"flex", padding:"0", margin:"0", textAlign:"center"}} type='number' value={count} readOnly/>
              <button onClick={increaseItem}>&nbsp; + &nbsp;</button >
            </div>
            <button type="text" className="addtocart" onClick={()=>{addToCart(product.id)}}>add to cart</button>
          </div>
        </div>
      </div>
      <MoreLikeThis/>
    </div>
  )
}

export default ProductDisplay;
