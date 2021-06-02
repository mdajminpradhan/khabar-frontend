import React from 'react';
import '../../assets/sass/core/testimonial.scss';
import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import Image from '../../assets/images/homepage/testimonials/testimonial.jpg';

const Testimonial = () => {
	return (
		<div className="testimonial">
			<div className="testimonial__header">
				<div className="testimonial__headerLeft">
					<img src={Image} alt="testimonial" />
					<FaQuoteLeft />
				</div>
				<div className="testimonial__headerMiddle">
					<h5>CLARA</h5>
					<p>DESIGN</p>
				</div>
				<div className="testimonial__headerRight">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaRegStar />
				</div>
			</div>
			<div className="testimonial__body">
				<p>
					"I would be lost without restaurant. I would like to personally thank you for your outstanding
					product."
				</p>
			</div>
		</div>
	);
};

export default Testimonial;
