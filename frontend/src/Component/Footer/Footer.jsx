import React from 'react';
import { FaWhatsappSquare, FaTwitterSquare, FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa";
import './Footer.css'; // Import the CSS file for styles

export const Footer = () => {
    return (
        <div className='Footer-container'>
            <div>
                <h2 style={{fontSize:35}}>Jpura Exams</h2>
                <p>We, engineers, are very much concerned about society and its betterment, and we believe that the betterment of society will bring a more prosperous and hybrid future generation than irrelevant mutations.</p>
                <p>It is very obvious how the engineering students in our society bring themselves up and plan out schemes to assist our community in many ways. We too, the Tamil people of the University of Moratuwa, brought ourselves together under the banner of Mora Exams.</p>
            </div>

            <div>
                <h4 style={{fontSize:25}}>Contact Us</h4>
                <p>0774676475</p>
                <p>Jtamil54@mail.com</p>
            </div>

            <div>
                <hr />
                <h4 style={{fontSize:25}}> Follow us</h4>
                <div className='icon-container'>
                    <FaWhatsappSquare className='social-icon' />
                    <FaTwitterSquare className='social-icon' />
                    <FaFacebookSquare className='social-icon' />
                    <FaFacebookMessenger className='social-icon' />
                </div>
            </div>
        </div>
    );
};
