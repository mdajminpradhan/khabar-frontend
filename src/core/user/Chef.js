import React from 'react'
import '../../assets/sass/core/chef.scss'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import chef from '../../assets/images/homepage/testimonials/testimonial.jpg';


const Chef = () =>{
    return (
        <div className="chef">
            <div className="chef__image">
                <img src={chef} alt="chef" />
                <button>Chef</button>
            </div>
            <div className="chef__intro">
                <h3>william smith</h3>
                <p>Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
                <div className="chef__introSocial">
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
        </div>
    )
}

export default Chef
