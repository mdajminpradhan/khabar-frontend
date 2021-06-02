import React from 'react';
import '../../assets/sass/core/services.scss';
import ServiceOne from '../../assets/images/homepage/menu/food-delivery.svg';
import ServiceTwo from '../../assets/images/homepage/menu/fast-delivery.svg';
import ServiceThree from '../../assets/images/homepage/menu/rating.svg';

const Services = () => {
	return (
		<div className="services">
			<div className="container">
				<div className="services__service">
					<img src={ServiceOne} alt="service one" />
					<div>
						<h1> Free shipping </h1>
						<p>Sign up for updates and get free shipping</p>
					</div>
				</div>
				<div className="services__service">
					<img src={ServiceTwo} alt="service two" />
					<div>
						<h1>30 Minutes Delivery</h1>
						<p>Everything you order will quickly delivered to your door.</p>
					</div>
				</div>
				<div className="services__service">
					<img src={ServiceThree} alt="service three" />
					<div>
						<h1>Best Quality Guarantee</h1>
						<p>Poco is an international chain of family restaurants.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
