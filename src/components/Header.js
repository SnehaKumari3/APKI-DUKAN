import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header" style={{padding:"5px"}}>
             <div>
                    <Link className="links" to="/"><i class="fas fa-home social-icons"></i>Home</Link>
                    <Link className="links" to="/"><i class="fas fa-info-circle social-icons"></i>About</Link>
                    <Link className="links" to="/"><i class="fas fa-headset social-icons"></i>Support</Link>
                    <Link className="links" to="/"><i class="fas fa-shopping-cart social-icons"></i>Cart</Link>
             </div>
            <nav className="navbar">
                <ul>
                    <Link className="links" to="/login"><button className="btn" style={{color: "#FFFFFF"}}>Get Started</button></Link>
                    
                </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
