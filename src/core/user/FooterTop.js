import React from 'react';
import '../../assets/sass/core/footertop.scss';
import logo from '../../assets/images/global/khabar.png';
import { FaFacebook, FaTwitter, FaYoutube, FaWordpress } from 'react-icons/fa';

const FooterTop = () => {
	return (
		<div className="footertop">
			<div className="footertop__header">
				<span>&nbsp;</span>
				<img src={logo} alt="site logo" />
			</div>
			<div className="container">
				<div className="footertop__column address">
					<p>Address</p>
					<span>570 8th Ave,</span>

					<span>New York, NY 10018</span>
					<span>United States</span>
				</div>
				<div className="footertop__column bookATable">
					<p>Book a table</p>
					<span>Dogfood och Sliders foodtruck. </span>
					<span>Under Om oss kan ni läsa</span>

					<pre>(850) 435-4155</pre>
				</div>
				<div className="footertop__column openingHours">
					<p>Book a table</p>
					<span>Monday – Friday: 8am – 4pm </span>
					<span>Saturday: 9am – 5pm</span>

					<div className="social">
						<a href="https://google.com">
							<FaFacebook />
						</a>
						<a href="https://google.com">
							<FaTwitter />
						</a>
						<a href="https://google.com">
							<FaYoutube />
						</a>
						<a href="https://google.com">
							<FaWordpress />
						</a>
					</div>
				</div>
				<div className="footertop__column newsletter">
					<p>newsletter</p>
					<span>Subscribe to the weekly newsletter for all </span>
					<span>the latest updates</span>

					<form action="">
						<input type="email" name="" id="" placeholder="Your Emial ..." />
						<button>SUBSCRIBE</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
