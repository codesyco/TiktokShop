import React from "react";
import "./NewArrival.css"
import newArrivals from '../Assets/newArrival'
import Item from "../Items/Item";

const NewArrival = (props) => {
    return(
        <>
        <div className="newarrival">
            <h1 className="NAtext">New Arrivals</h1>
                <center><hr /></center>
            <div className="aitembox">
                <div className="aitemboxitem">
                    {newArrivals.map((item, i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
                        
                    })}
                </div>
            </div>
            {/* <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="itemsPrices">
                <div className="itemPricesNew">
                    {props.newPrice}
                </div>
                <div className="itemPricesOld">
                    {props.oldPrice}
                </div>
            </div> */}
        </div>
        </>
    )
}

export default NewArrival;