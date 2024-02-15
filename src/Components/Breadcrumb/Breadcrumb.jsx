import "./Breadcrumb.css"
import arrowIcon from "../Assets/More Than.png"
import React from 'react'
import Product from "../../Pages/Product"
import { Link, useLocation } from "react-router-dom"



const Breadcrumb = () => {
  
  const directory = useLocation()

  let currentlink = ''

  
  const crumbs = directory.pathname.split('/')
  .filter((crumb) => crumb !== '')
  .map(crumb => { 
    currentlink+= `/${crumb}`
    
    return(
      <>
      <div key={crumb} className="crumb" >
        <Link to={currentlink}>{crumb}</Link>
        <img src={arrowIcon} style={{marginLeft:"5px"}} width={10} alt=""/>
      </div>
      </>
    )
  })
  
  if (directory.pathname === "/") {
    return("")
  }
  else {

    return (
      <div className="breadcrumb" >
        <Link to={currentlink} style={{ display:"flex", textDecoration:"none", gap:"5px"}}>
          <Link to={"/"} style={{listStyle:"none", textDecoration:"none", color:"black", textTransform:"capitalize"}}>Home </Link>
           <img src={arrowIcon} width={10} height={10} style={{top:"5px", position:"relative"}} alt=""/> 
           {crumbs}
        </Link>
    </div>
  )
  }
}

export default Breadcrumb;
