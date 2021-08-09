import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <section className="showcase login">
                <div className="overlay">
                    <form className="form">
                        <div className="btn">
                            <p>Sign Up</p>
                        </div>
                        <input type="text" name="username" id="username" placeholder="Your Name" required />
                        <input type="email" name="email" id="email" placeholder="Your Email" required />
                        <input type="number" name="number" id="phone" placeholder="Mobile Number (optional)" required />
                        <input type="password" name="password" id="password" placeholder="Password" required />
                        <div className="btn">
                            <Link className="links" to="/profile"><span></span>Create Account</Link>
                        </div>
                        <div className="btn">
                            <p>OR</p>
                        </div>
                        <div className="google">
                            <Link className="links google" to="/profile"><span></span> Sign Up with Google</Link>
                        </div>
                        <div className="btn">
                            <p>Already have an account? go to Sign in</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUp
