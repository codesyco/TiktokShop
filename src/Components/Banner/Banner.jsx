import React from "react";
import "./Banner.css"
import banner from "../Assets/Banner.png"
import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <>
        <div className="banner_body">
            <h1 className="banner_phrase">Shop <br/>To your<br/> satisfaction </h1>
            <p className="banner_phrase_2">Shop the latest viral TikTok trends!<br/> Find all the cool products you saw on your feed,<br/> right here.</p>
            <p className="hashtag_text">#TikTokMadeMeBuyIt</p>
            <span className="shopnow">
                <Link to="/category">
                    <button className="shopbtn">Shop Now</button>
                </Link>
            </span>
            <div className="feats">
                <h2><span className="word20">55+</span>  <br/>Trendy Tiktok Products</h2>
                <h2><span className="word20">300+</span> <br/>International deliveries </h2>
                <h2><span className="word20">1000+</span> <br/>Happy customers</h2>
            </div>
                
        </div>
        </>
    )
}

export default Banner;