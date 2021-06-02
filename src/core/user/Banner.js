import React from 'react';
import '../../assets/sass/core/banner.scss';
import MenuImage from '../../assets/images/homepage/menus/combo.png';
import Map from '../../assets/images/homepage/menus/map.png';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className="banner">
			<div className="container">
				<div className="banner">
					<div>
						<h2>Any day offers</h2>
						<p>new phenomenon</p>
						<p>burger taste</p>

						<h3>$12.90 </h3>
					</div>
					<div className="banner__image">
						<img src={MenuImage} alt="banner" />
					</div>
				</div>
				<div className="banner">
					<div>
						<h2>Any day offers</h2>
						<p>new phenomenon</p>
						<p>burger taste</p>

						<h3>$12.90 </h3>
					</div>
					<div className="banner__image">
						<img src={MenuImage} alt="banner" />
					</div>
				</div>
				<div className="banner">
					<div>
						<h2> Find a store near you</h2>


						<Link to="/contact">Contact Us</Link>
					</div>
					<div className="banner__image">
						<img src={Map} alt="banner" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
