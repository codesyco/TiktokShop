import React from 'react'
import { useParams } from 'react-router-dom'
// import Item from "../Components/Items/Item"
import prod from "../Components/Assets/data"


const item = prod[0]



const Details = () => {
    const { id } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <img src={item.image} alt="" style={{ width: "100px"}}/>
      <h2>{item.name}</h2>
      <small>{item.newPrice} &nbsp;{item.oldPrice}</small>
    </div>
  )
}

export default Details
