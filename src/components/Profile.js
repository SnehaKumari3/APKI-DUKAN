import React from 'react'
import { Link } from "react-router-dom";
import image8 from '../assets/image8.png'



const Profile = ({handleLogout}) => {
    return (
        <>
        <div className="hero">
            <div className="wrapper">
                <div className="profile">
                    <div className="profile-img-info">
                        <div className="img">
                            <img src={image8} alt="profile-pic" />
                        </div>
                        <div className="info">
                            <p className="name">Sneha kumari</p>
                            <p className="place"><span><i class="fas fa-map-marker-alt"></i></span> nawada,Bihar</p>
                            <p className="place"><span><i class="fas fa-user-graduate"></i></span> Student at National Institute Of Technology , Patna</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="personal-info">
                            <p>Personal Information</p>
                            <ul>
                                <li>
                                    <span className="icon"><i class="fas fa-user"></i></span>
                                    <span className="title">Sneha Kumari</span>
                                </li>
                                <li>
                                    <span className="icon"><i class="fas fa-phone-alt"></i></span>
                                    <span className="title">+91 1234567890</span>
                                </li>
                                <li>
                                    <span className="icon"><i class="fas fa-envelope-open-text"></i></span>
                                    <span className="title">sneha123kumari@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="stuff">
                            <span className="tag">My Wishlist</span>
                            <span className="tag">My Coupons & Cards</span>
                            <span className="tag">Change Password</span>
                            <span className="tag">All Notifications</span>
                            <span className="tag">Track order</span>
                            <span className="tag">FAQs</span>
                            <span className="tag">Help Desk</span>
                        </div>

                    </div>
                </div>

                <div className="profile">
                    <div className="user-info">
                        <div className="user-info-wrap">
                            <div className="item">
                                <div className="icon"><i class="fas fa-map-marker-alt"></i></div>
                                <div className="title">Adress</div>
                            </div>
                            <div className="item">
                                <p>Tn. N. Suprato</p>
                                <p>JI. Denpasar Raya No. 3 Blok A13 Kuningam</p>
                                <p>Jakarta Selatan 12345</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="user-info-wrap">
                            <div className="item">
                                <div className="icon"><i class="fas fa-credit-card"></i></div>
                                <div className="title">Payments</div>
                            </div>
                            <div className="item">
                                <p>Card Number : ************654</p>
                                <p>JExpiry Date : 12 / 23</p>
                                <p>CVV Number : 123</p>
                                <p>250 North Texas 77094 Bihar , INDIA</p>
                            </div>
                        </div>
                        <div className="user-info-wrap">
                            <div className="item">
                                <div className="icon"><i class="fas fa-id-card-alt"></i></div>
                                <div className="title">Identification</div>
                            </div>
                            <div className="item">
                                <p>Tn. N. Suprato</p>
                                <p>JI. Denpasar Raya No. 3 Blok A13</p>
                                <p>Kuningam</p>
                                <p>Jakarta Selatan 12345</p>
                            </div>
                        </div>
                        <div className="user-info-wrap">
                        <div className="google">
                            <Link className="links" onClick={handleLogout}><span></span>Log Out</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Profile
