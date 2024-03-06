import React, { createContext, useState } from 'react'
import allProduct from "../Components/Assets/allProducts"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProduct.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId, count) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + count}))
        // console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] -1}))
    }
    
    const productsInCart = allProduct.filter(product => cartItems[product.id] > 0);
    
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        // console.log(cartItems)
        for(const goods in cartItems)
        {
            if (cartItems[goods]>0)
                {
                let itemInfo = allProduct.find((product) => product.id === Number(goods))
                totalAmount += itemInfo.newPrice * cartItems[goods];
            }

            
        }
            return totalAmount;
    }
    const getTotalCartItems = () => {
        let goodscount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                goodscount += cartItems[item];
            }
        }
        return goodscount;
    }
   
    const contextValue = {getTotalCartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart, productsInCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
