import React from 'react'
import { Link } from "react-router-dom";
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'

const Items = () => {
    return (
        <>
            <section className="grid">
                <h3>WE MAKE IT EASY !!</h3>
                <div className="grid-items">
                    <div>
                        <img src={image6} />
                        <h4>Fruits and vegetables store</h4>
                        <p>Shop Fruits & vegetables at Great Prices online. Order now and get them delivered at your doorstep.</p>
                        <Link className="links" ><span></span>Check Now</Link>
                    </div>
                    <div>
                        <img src={image2} />
                        <h4>Regular Fit Top</h4>
                        <p>Buy the latest collection of classy and elegant tops for women & girls online at best prices</p>
                        <Link className="links"><span></span>Check Now</Link>
                    </div>
                    <div>
                        <img src={image1} />
                        <h4>Love bracelet </h4>
                        <p>Gold Stylish Bracelet Earrings Combo Jewellery For Women and Girls</p>
                        <Link className="links" ><span></span> Check Now</Link>
                    </div>
                    <div>
                        <img src={image7} />
                        <h4>Technology and gadgets</h4>
                        <p>10% Discount on All Electronic Items. Top Brands , Great deals.Shop now  from a wide range of Gadgets.</p>
                        <Link className="links" ><span></span> Check Now</Link>
                    </div>
                    <div>
                        <img src={image5} />
                        <h4>Ariel Powder</h4>
                        <p>Detergent Powder That Dissolves Easily And Removes Tough Stains.FREE Delivery on first order.</p>
                        <Link className="links"><span></span>Check Now</Link>
                    </div>
                    <div>
                        <img src={image4} />
                        <h4>The sofa store</h4>
                        <p>Whatever may be the case, you need furniture, such as a sofa, a table and a bed, to stay comfortable</p>
                        <Link className="links" ><span></span>Check Now</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Items
