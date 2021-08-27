import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header">
             <div>
                    <Link className="links" to="/"><i class="fas fa-home social-icons"></i>Home</Link>
                    <Link className="links" to="/"><i class="fas fa-shopping-cart social-icons"></i></Link>
             </div>
            <nav className="navbar">
                <ul>
                    <Link className="links" to="/login">Get Started</Link>
                </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
