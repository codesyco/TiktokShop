import React, { useContext, useState } from 'react';
import './CartItems.css';
import remove from "../Assets/Remove.png";
import { ShopContext } from '../../Context/ShopContext';
import allProduct from '../Assets/allProducts';

const CartItems = () => {
  const {getTotalCartAmount,cartItems, productsInCart, removeFromCart } = useContext(ShopContext);

const renderHrTags = (index, cartLength) => {
    if (index >= cartLength - 1) return null;
    if (index >= 2) {
        return <hr key={`hr-${index}`} />;
    }
  
    const hrCount = index % 2 === 0 ? index + 1 : index;
    let hrTags = [];
    for (let i = 0; i < hrCount; i++) {
      hrTags.push(<hr key={`hr-${index}-${i}`} />);
    }
    return hrTags;
  };
  
  

  // const productsInCart = allProduct.filter(product => cartItems[product.id] > 0);

    return (
      <div className='cartitem'>
        {productsInCart.map((product, index) => (
          <React.Fragment key={product.id}>
              <div className="cartitembox" style={{display:"flex"}}>
                  <div className='classitemFormat' style={{ display: "block", padding: "20px" }}>
                      <img src={product.image} width={100} height={100} alt={product.name} style={{borderRadius:"10px", padding:"10px"}}/>    
                  </div>
                  <div className="info" style={{width:"100%"}}>
                      <div style={{padding:"15px 10px 0px 0px", display:"flex", justifyContent:"space-between", width:"100%"}}>
                          <p style={{fontSize:"23px", fontWeight:"600"}}>{product.name}</p>
                          <img src={remove} width={25} height={25} onClick={() => removeFromCart(product.id)} alt="Remove item" />
                      </div>
                      <div className="quantityandprice" style={{display:"flex", marginTop:"55px", gap:"80px"}}>
                          <p style={{fontSize:"20px", fontWeight:"700"}}>${(product.newPrice * cartItems[product.id]).toFixed(2)}</p>
                          <div className="quantitybuttons">
                              {/* <button onClick={decreaseItem}>-</button> */}
                              <button className='cartquantity' style={{minWidth:"20px", maxWidth:"99px"}}>{cartItems[product.id]}</button>
                              {/* <button onClick={increaseItem}>+</button>  */}
                          </div>
                      </div>
                  </div>
              </div>
                  {renderHrTags(index, productsInCart.length)}
          </React.Fragment>
        ))}
      </div>
    );
};

export default CartItems;