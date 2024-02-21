import "./Footer.css"
import twitter from '../Assets/Instagram.png'
import instagram from '../Assets/Twitter.png'
import { Link } from "react-router-dom"
const Footer = () => {
    // const subbtn = () => {
    //     do
    // }
    return(
        <>
            <div className="footer">
                <div className="footercontent">
                    <div>
                        <h1>Shop.co</h1>
                        <p>Feel like part of the movement! Own the items that define the latest TikTok trends.</p>
                        <a href="">
                        <img src={twitter} alt="twitter" />
                        </a>
                        <img src={instagram} alt="insta" />
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
                    <p>2002-2024&copy;</p>
                </div>
                <div className="newsletterFloat">
                    <p>Subscribe to our newsletter and stay updated</p>
                    <div className="nLetter">
                        <input type="email" placeholder="Enter your email" />
                        <button id="subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Footer;