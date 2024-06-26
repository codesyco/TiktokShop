import "./Footer.css"
import instagram from '../Assets/Instagram.png'
import twitter from '../Assets/Twitter.png'
import { Link,  useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.css';
import visa from '../Assets/Visa.png'
import mastercard from '../Assets/Mastercard Logo.png'
import discover from '../Assets/Discover Card.png'
import amex from "../Assets/American Express.png"
import logosub from "../Assets/footerlogo.png"

const Footer = () => {
    const location = useLocation();
    const [showFooter, setShowFooter] = useState(false)

    useEffect(() => {
        const paths = location.pathname.split('/');
        const path1 = paths[paths.length - 1]; 
        const path2 = paths[paths.length - 1];
        if (path1 === "checkout" || path2 === "cart") {
            setShowFooter(false)
        } else {
            setShowFooter(true)
        }
    }, [location])
    return(
        showFooter ?
        <div className="footer">
            {/* <div className="newsletterFloat">
                <p>Subscribe to our newsletter and stay updated</p>
                <div className="nLetter">
                    <input type="email" placeholder="Enter your email" />
                    <button id="subscribe">Subscribe</button>
                </div>
            </div> */}
            <div className="footercontent">
                <div className="footershoplogo">
                    <img src={logosub} width={150} height={50} alt="OLLY" />
                    <p>Feel like part of the movement! Own the items that define the latest TikTok trends.</p>
                    <div className="socials">
                        <div>
                            <a href="https://twitter.com">
                                <img src={twitter} alt="twitter" />
                            </a>
                        </div>
                        <div className="socialimage">
                            <a href="https://instagram.com">
                                <img src={instagram} alt="insta"  />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="helpfullLinks">
                    <h2>Helpfull links</h2>
                    <ul className="helpfullLinksRoute">
                        <li className="hLinks">
                            <Link to= "/Terms-and-conditions" onClick={window.scrollTo(0,0)}> Terms & Condition</Link>
                        </li>
                        <li className="hLinks">
                            <Link to= "/Policy"  onClick={window.scrollTo(0,0)}>Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="aboutus">
                    <h2>About Us</h2>
                    <p>Located in the vibrant heart of Orlando, Florida, olly is your ultimate destination for all things trendy and TikTok-inspired. We pride ourselves on curating the hottest selection of products that are sure to elevate your social media game and keep you ahead of the curve.</p>
                </div>
                <div className="newsletter">
                    <h2>Newsletter</h2>
                    <p>Get exclusive Offers on your Email! <br/> unique gift ideas, and personalized tips for shopping on shop.</p>
                </div>
            </div>
            <div className="copyfooter">
                <p>Olly.co 2002-2024&copy;</p>
                <div>
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={discover} alt="" />
                    <img src={amex} alt="" />
                </div>
            </div>  
        </div> :
        <></>
    )
} 

export default Footer;