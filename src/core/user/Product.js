import React from 'react';
import '../../assets/sass/core/product.scss';
import Image from '../../assets/images/homepage/products/product-2.png';

import { AiFillHeart } from 'react-icons/ai';
import { FaStar, FaRegStar, FaShoppingBasket } from 'react-icons/fa';

const Product = () => {
	return (
		<div className="product">
			<div className="product__image">
				<img src={Image} alt="product" />
				<AiFillHeart />
			</div>
			<div className="product__body">
				<div className="review">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaRegStar />
				</div>
				<h3>Bacon Burger</h3>
				<p> A mighty meaty double helping of all the reasons you love our burger.</p>

				<div className="priceAndCart">
					<h3>£10.95</h3>
					<FaShoppingBasket />
				</div>
			</div>
		</div>
	);
};

export default Product;
