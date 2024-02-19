import React from 'react'
import Item from '../Items/Item'
import newArrivalMLT from '../Assets/newArrival'
import "./MoreLikeThis.css"

const MoreLikeThis = () => {
  return (
    <>
    <div className='morelikethis'>
        <center>
        <h1>Check out more products</h1>
        <hr />
        </center> 
        <div className="aitembox-morelikethis">
                <div className="aitemboxitem-morelikethis">
                    {newArrivalMLT.map((item, i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
                        
                    })}
                </div>
        </div>
    </div>
    </>
  )
}

export default MoreLikeThis;
