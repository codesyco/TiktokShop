import React, { useContext, useEffect, useState } from "react";
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdownicon from "../Components/Assets/Expand Arrow.png";
import allProduct from "../Components/Assets/allProducts";
import Item from "../Components/Items/Item";
import cindy from "../Components/Assets/cindy.jpg";
import cannister from "../Components/Assets/product_6.png";
// import salebanner from '../Components/Assets/product_1.png'
import pop from "../Components/Assets/product_1.png";
import ban from "../Components/Assets/woman-her-kitchen.jpg";
import ProductBanner3 from "../Components/Banner/ProductBanner3";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import axios from "axios";
import kichenwarebanner from "../Components/Assets/ninja5.jpg";

const ShopCategory = (props) => {
  const { allProduct2, shopProducts } = useContext(ShopContext);
  const [data, setData] = useState([]);
  // const fetch = async () => {
  //   const res = await axios.get("http://localhost:4400/api/product");
  //   try {
  //     console.log(data);
  //     return setData(res.data.response);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  const windowscroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    allProduct2();
    console.log(shopProducts);
    setData(shopProducts);
  }, []);
  return (
    <div className="shopCategory">
      <div className="heading">
        <h1>On Sale</h1>
        {/* <hr /> */}
        <p>Find trendy products from your for you page</p>
      </div>
      <div className="wrapper">
        <div className="catselector">
          <div className="newarrivaldiv">
            <div className="nadwrapper">
              <img src={cannister} alt="" loading="lazy" />
              <p>New arrivals</p>
            </div>
          </div>
          <div className="topsellingdiv">
            <div className="tsdwrapper">
              <img src={pop} alt="" loading="lazy" />
              <p> Top selling</p>
            </div>
          </div>
        </div>
        <div className="sec0">
          <div className="discbannerContainer">
            <div className="discbannerwrapper">
              <div className="banimage">
                <img
                  src={ban}
                  className="banimage_img"
                  alt="banenr"
                  loading="lazy"
                />
              </div>
              <div className="sinfoWrapper">
                <div className="infoWrapper-Inner">
                  <h2>Limited time discount</h2>
                  <p>Explore our jaw dropping prices on all products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec1">
          <div className="outdoordiv">
            <div className="odwrapper"></div>
            <div className="odbanner">
              <div className="odbanwrapper">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <div>
                    <h2>title</h2>
                    <p> title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec2">
          <div className="selfcareitems">
            <div className="scwrapper">{/* //map sc items/ */}</div>
            <div className="scbanner">
              <div className="scbanwrapper">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <div>
                    <h2>title</h2>
                    <p>info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3">
          <div className="kitchenware">
            <div className="kwcontainer">
              <div className="kwwrapper">
                {data.map((el, index) => (
                  <div key={index} className="item" onClick={windowscroll}>
                    <Link to={`/products/${el.id}`}>
                      {" "}
                      <LazyLoadImage
                        src={`http://localhost:4400/${el.image}`}
                        className="itemimage"
                        width={450}
                        height={450}
                        alt={el.name}
                      />
                      <p>{el.name}</p>
                      <div className="itemsPrices">
                        <div className="itemPricesNew">${el.newPrice}</div>
                        <div className="itemPricesOld">${el.oldPrice}</div>
                      </div>
                      <div className="interactiveButtons">
                        {/* <button className='previewbtn'>
                    <Link to={":id"} key={data.id}>Preview</Link>
                  </button> */}
                        {/* <button className='addtocart'>
                    Add to cart
                  </button> */}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="kwbanner">
              <div className="imageBanner">
                <img
                  src={kichenwarebanner}
                  alt="kitchenwareBanner"
                  loading="lazy"
                  className="kwbimg"
                />
              </div>
              <div className="descBanner">
                <h2>Homemade Ice Cream Made Easy</h2>
                <p>
                  All without a recipe! With its simple controls and
                  easy-to-clean parts, the CREAMi is perfect for creating frozen
                  treats the whole family will love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="shopcategory-indexsorting">
        <p>
          <span> Showing 1-9</span> out of 9 products
        </p>
        <div className="shopcategorysort">
            Sort by 
          <img width={20} height={20} src={dropdownicon} alt="" />
        </div>
      </div> */}
      {/* <div className="catpage">
        <aside className='stickybar'>
          <div className="swiper-slide testimonials-item">
              <div className="info">
                  <img src={cindy} alt="" />
                  <div className="t-text-box">
                      <h3 className="name">cindy</h3>
                      <span className="job">Top customer</span>
                  </div>
              </div>
              <p> I love the convenience of just turning knob and cereal appears. No fuss, no mess! I bought the dispenser b/c my 14 yr old can't seem to pour a bowl of cereal w/o spilling it or the milk or both. The container releases one serving at a time per turn of knob. great for clumsy hands in a hurry! No spills at all!, i recommend most items on this website they are very useful</p>
              <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
              </div>
          </div>
        </aside> 
        
        <div className="shopcategoryproducts">
          
          {allProduct.map((item, i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            }
          })}
        </div>
      </div> */}
    </div>
  );
};

export default ShopCategory;
