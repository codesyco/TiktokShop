import "./Footer.css"
import twitter from '../Assets/Instagram.png'
import instagram from '../Assets/Twitter.png'
import { Link,  useLocation } from "react-router-dom"
import { useState, setState, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.css';
import visa from '../Assets/Visa.png'
import mastercard from '../Assets/Mastercard Logo.png'
import discover from '../Assets/Discover Card.png'
import amex from "../Assets/American Express.png"

const Footer = () => {
    const location = useLocation();
    const [showFooter, setShowFooter] = useState(false)

    useEffect(() => {
        const paths = location.pathname.split('/');
        if (paths.includes("checkout")) {
            setShowFooter(false)
        } else {
            setShowFooter(true)
        }
    }, [location]);
    return(
        showFooter ?
        <div className="footer">
            <div className="newsletterFloat">
                <p>Subscribe to our newsletter and stay updated</p>
                <div className="nLetter">
                    <input type="email" placeholder="Enter your email" />
                    <button id="subscribe">Subscribe</button>
                </div>
            </div>
            <div className="footercontent">
                <div className="footershoplogo">
                    <h1>Olly.co</h1>
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
                            <Link to= "/terms"> Terms of Delivery</Link>
                        </li>
                        <li className="hLinks">
                            <Link to= "/conditions"> Terms and Condition</Link>
                        </li>
                        <li className="hLinks">
                            <Link to= "/returns">Returns</Link>
                        </li>
                        <li className="hLinks">
                            <Link to= "/policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita blanditiis exercitationem reprehenderit id. Animi expedita praesentium aspernatur nihil?</p>
                </div>
                <div className="newsletter">
                    <h2>Newsletter</h2>
                    <p>Get exclusive Offers on your Email! <br/> unique gift ideas, and personalized tips for shopping on shop.</p>
                </div>
            </div>
            <div className="copyfooter">
                <p>Olly.co 2002-2024&copy;, All right reserved</p>
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