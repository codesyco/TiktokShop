import React from "react";
import './TopSelling.css'
import dataProduct from "../Assets/data";
import Item from "../Items/Item";

const TopSelling = () => {
    return(
        <>
        <div className="topselling">
            <h1 className="TStext">Top Selling</h1>
            <center><hr /></center>
            <div className="itembox">
                <div className="itemboxItem">
                    {dataProduct.map((item,i)=>{
                            return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
                        })}
                </div>
            </div>
        </div>
        </>
    )
}

export default TopSelling;