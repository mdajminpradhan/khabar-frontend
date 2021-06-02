import React from 'react';
import '../../assets/sass/core/herosection.scss';

const HeroSection = () => {
	return (
		<div className="herosection">
			<div className="container">
				<h1>
					AMAZING & DELICIOUS FOOD WITH <span>HOT OFFERS!</span>
				</h1>

				<h3>Get Your Combo Offers Right Away</h3>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

				<div>
					<button>ORDER NOW</button>
                    <h3>$12.99 <sup><s>19.99</s></sup></h3>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
