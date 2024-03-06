import React from 'react'
import data from '../Assets/data'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const windowscroll = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <div className='item' onClick={windowscroll}>
      <Link to={`/products/${props.id}`}> <img src={props.image}  className="itemimage" width={200} height={200} alt={props.name} /></Link>
      
      <p>{props.name}</p>
      <div className="itemsPrices">
          <div className="itemPricesNew">
              ${props.newPrice}
          </div>
          <div className="itemPricesOld">
              ${props.oldPrice}
          </div>
      </div>
      <div className='interactiveButtons'>
        {/* <button className='previewbtn'>
          <Link to={":id"} key={props.id}>Preview</Link>
        </button> */}
        {/* <button className='addtocart'>
          Add to cart
        </button> */}
      </div>
    </div>
    </>
  )
}

export default Item;
