import React from 'react'
import { Link } from "react-router-dom";
const Showcase = () => {
    return (
        <>
            <section className="showcase login">
                <div className="overlay">
                    <h1>Welcome To Apki Dukan</h1>
                    <p>Online Stores Of Daily Needs Product</p>
                    <form className="form browse">
                    <div className="btn">
                    <Link className="links" to="/"><span></span><i class="fal fa-stars"></i>Shop Now</Link>
                    </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Showcase
