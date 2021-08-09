import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="showcase login">
                <div className="overlay">
                    <form className="form">
                        <div className="btn">
                            <p>Sign In</p>
                        </div>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" required />
                        <input type="password" name="password" id="password" placeholder="Enter Your Password" required />
                        <div className="btn">
                            <Link className="links" to="/profile"><span></span>Continue</Link>
                        </div>
                        <div className="btn">
                            <p>New to Apki Dukan? go to sign up</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
