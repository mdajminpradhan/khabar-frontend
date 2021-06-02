import React from 'react';
import '../../assets/sass/core/testimonials.scss';
import Testimonial from './Testimonial';

const Testimonials = () => {
	return (
		<div className="testimonials">
            <h1>What your client says</h1>
			<div className="container">
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</div>
		</div>
	);
};

export default Testimonials;
