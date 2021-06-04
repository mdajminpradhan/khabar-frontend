import React from 'react';
import '../assets/sass/user/about.scss';
import { Link } from 'react-router-dom';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import ImageOne from '../assets/images/about/herosection/1.jpg';
import ImageTwo from '../assets/images/about/herosection/2.jpg';
import ImageThree from '../assets/images/about/herosection/3.jpg';
import background from '../assets/images/about/play/play.jpg';
import { BsFillPlayFill } from 'react-icons/bs';
import AboutTwo from '../assets/images/about/aboutshow/2.png';
import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import Image from '../assets/images/homepage/testimonials/testimonial.jpg';
import Chef from '../core/user/Chef';

const About = () => {
	return (
		<Base>
			<Breadcum title="About Us" description="About us" />
			<div className="about">
				<div className="container">
					<div className="about__herosection">
						<div className="about__herosectionLeft">
							<h2>Wellome!</h2>
							<h1>Best burger ideas & traditions from the whole world</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
							</p>
							<p>
								Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non
								tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.
							</p>
							<Link to="/contact">
								<button>CONTACT NOW</button>
							</Link>
						</div>
						<div className="about__herosectionRight">
							<img src={ImageTwo} alt="khabar herosection" />
							<div>
								<img src={ImageOne} alt="khabar herosection" />
								<img src={ImageThree} className="last" alt="khabar herosection" />
							</div>
						</div>
					</div>
				</div>

				<div className="about__play">
					<img src={background} alt="background" />
					<div>
						<BsFillPlayFill />
						<h1>Make the thing Anything is Possible</h1>
						<span>Enjoy our luscious dishes wherever you want</span>
						<Link to="/products">
							<button>ORDER NOW</button>
						</Link>
					</div>
				</div>

				<div className="container">
					<div className="aboutshow">
						<div className="aboutshow__left">
							<h2>Our Quality</h2>
							<h1>Chicken</h1>
							<p>
								Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled
								Chicken Topping are made from chickens raised without antibiotics and fed an all
								vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100%
								chicken breast meat.
							</p>
							<button>ORDER NOW</button>
						</div>
						<div className="aboutshow__right">
							<img src={AboutTwo} alt="about one" />
						</div>
					</div>

					<div className="aboutshow">
						<div className="aboutshow__right">
							<img src={AboutTwo} alt="about one" />
						</div>
						<div className="aboutshow__left">
							<h2>Our Quality</h2>
							<h1>Chicken</h1>
							<p>
								Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled
								Chicken Topping are made from chickens raised without antibiotics and fed an all
								vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100%
								chicken breast meat.
							</p>
							<button>ORDER NOW</button>
						</div>
					</div>

					<div className="aboutshow">
						<div className="aboutshow__left">
							<h2>Our Quality</h2>
							<h1>Chicken</h1>
							<p>
								Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled
								Chicken Topping are made from chickens raised without antibiotics and fed an all
								vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100%
								chicken breast meat.
							</p>
							<button>ORDER NOW</button>
						</div>
						<div className="aboutshow__right">
							<img src={AboutTwo} alt="about one" />
						</div>
					</div>
				</div>

				<div className="about__testimonials">
					<div className="container">
						<div className="about__testimonial">
							<div className="testimonial__image">
								<img src={Image} alt="testimonial" />
								<FaQuoteLeft />
							</div>
							<div className="testimonial__review">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaRegStar />
							</div>
							<q>
								I would be lost without restaurant. I would like to personally thank you for your
								outstanding product.
							</q>
							<h5>CLARA</h5>
							<p>CEO, Apple</p>
						</div>
					</div>
				</div>

				<div className="aboutchef">
					<div className="container">
						<div className="aboutchef__header">
							<h2>Always Quality</h2>
							<h1>Our Talented Chefs</h1>
						</div>

						<div className="aboutchef__body">
							<Chef />
							<Chef />
							<Chef />
						</div>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default About;
