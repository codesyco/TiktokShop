import React, { createContext, useEffect, useState } from 'react'
import allProduct from "../Components/Assets/allProducts"
import axios from 'axios';

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
    const [shopProducts, setShopProducts] = useState([])
    const [userlog, setUserlog] = useState({
        email: '',
        shippingAddress: '',
        shippingApartment: '',
        shippingCity: '',
        shippingZip: '',
        shippingState: 'AL',
        billingAddress: '',
        billingApartment: '',
        billingCity: '',
        billingZip: '',
        billingState: 'AL',
        useSameAddress: false,
        firstName: '',
        lastName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      } )

    const allProduct2 = async () => {
        const rawdata = await axios.get("http://localhost:4400/api/product")
        try {
            return setShopProducts(rawdata.data.response)
        } catch (error) {
            console.error(error.message)
        }
    }
    const addToCart = (itemId, count) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + count}));
        // console.log(cartItems)
    };
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        allProduct2()
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      }, []);
    
      // Save cart items to localStorage whenever cartItems change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    
    //     const cartvalue = () => {

    //         const storedCartRaw = localStorage.getItem('cart');
    //         const storedCartvalue = JSON.parse(storedCartRaw);

    //         try {
    //             if(storedCartRaw){
    //                 setCartItems(storedCartvalue);
    //             }else{
    //                 return {}
    //             }
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    //     cartvalue()
    // }, []);

    // useEffect(() => {
    // }, [getDefaultCart()]);

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

    const [submitted, setSubmitted] = useState(false)

    const issubmitted = () => {
        setSubmitted(true)
    }
    const userLogs = (props) => {
        setUserlog(props)
    }
   
    const contextValue = {getTotalCartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart, productsInCart, userLogs, userlog, issubmitted, submitted, allProduct2, shopProducts};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
