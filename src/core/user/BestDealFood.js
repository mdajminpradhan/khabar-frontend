import React from 'react'
import '../../assets/sass/core/bestdealfood.scss';
import Image from '../../assets/images/homepage/products/product-2.png';
import { FaStar, FaRegStar } from 'react-icons/fa';


const BestDealFood = () => {
    return (
        <div className="bestdealfood">
            <div className="bestdealfood__thumbnail">
                <img src={Image} alt="best food" />
            </div>
            <div className="bestdealfood__content">
                <div className="review">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                </div>

                <h4>Watter Bottle</h4>
                <p>£14.90</p>
            </div>
        </div>
    )
}

export default BestDealFood
