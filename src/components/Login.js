import React from 'react'



const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, sethasAccount, emailError, passwordError } = props;

    return (
        <>
        <section className="login">
            <div className="loginContainer">
                <div className="welcome">
                {hasAccount ? (
                        <>
                        <h2>Welcome Back 
                                <span onClick={() => sethasAccount(!hasAccount)}></span></h2>
                        </>
                    ) : (
                        <>
                        <h2>Create Your Account
                                <span onClick={() => sethasAccount(!hasAccount)}></span></h2>
                        </>
                    )}
                </div>
                <label><i class="fas fa-envelope-open-text"></i>Email</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label><i class="fas fa-lock"></i>Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account ?
                                <span onClick={() => sethasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Already have an account ?
                                <span onClick={() => sethasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>

        <footer className="footer">
      <div>
        <ul>
          <li><button>About Us</button></li>
          <li><button>Privacy Policy</button></li>
          <li><button>Customer Reviews</button></li>
        </ul>
        <ul>
          <li><button>Order Now</button></li>
          <li><button>Gift Cards</button></li>
          <li><button>Our Offerings</button></li>
        </ul>
        <ul>
          <li><button><a href="#"><i class="fab fa-google social-icons"></i></a></button></li>
          <li><button><a href="#"><i class="fab fa-twitter social-icons"></i></a></button></li>
          <li><button><a href="#"><i class="fab fa-facebook-f social-icons"></i></a></button></li>
        </ul>
        <ul>
          <li><button>Help Desk</button></li>
          <li><button>Investors</button></li>
          <li><button>Blog</button></li>
        </ul>
      </div>
      <h4><i class="fas fa-copyright social-icons"></i>Copyright All rights reserved</h4>
    </footer>
        </>
    )
}

export default Login
