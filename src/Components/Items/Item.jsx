import React from "react";
import data from "../Assets/data";
import "./Item.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Item = (props) => {
  const windowscroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="item" onClick={windowscroll}>
        <Link to={`/products/${props.id}`}>
          {" "}
          <LazyLoadImage
            src={props.image}
            className="itemimage"
            width={200}
            height={200}
            alt={props.name}
          />
          <p>{props.name}</p>
          <div className="itemsPrices">
            <div className="itemPricesNew">${props.newPrice}</div>
            <div className="itemPricesOld">${props.oldPrice}</div>
          </div>
          <div className="interactiveButtons">
            {/* <button className='previewbtn'>
          <Link to={":id"} key={props.id}>Preview</Link>
        </button> */}
            {/* <button className='addtocart'>
          Add to cart
        </button> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Item;
