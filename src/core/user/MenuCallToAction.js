import React from 'react';
import '../../assets/sass/core/menucalltoaction.scss';
import calltoaction from '../../assets/images/homepage/menu/background-3.jpg';
import { Link } from 'react-router-dom';

const MenuCallToAction = () => {
	return (
		<div className="menucalltoaction">
			<div className="menucalltoaction__left">
				<img src={calltoaction} alt="call to action" />
				<div>
					<h1>Explore the new taste</h1>
					<p>Enjoy our luscious dishes wherever you want</p>
					<Link to="/shop">
						<button>ORDER NOW</button>
					</Link>
				</div>
			</div>
			<div className="menucalltoaction__right">
                <div className="container">

				<div>
					<div>
						<h1>Pizza Hut</h1>
						<p>$4.95</p>
					</div>
					<span>Shrimp, Squid, Pineapple</span>
				</div>
				<div>
					<div>
						<h1>Pizza Hut</h1>
						<p>$4.95</p>
					</div>
					<span>Shrimp, Squid, Pineapple</span>
				</div>
				<div>
					<div>
						<h1>Pizza Hut</h1>
						<p>$4.95</p>
					</div>
					<span>Shrimp, Squid, Pineapple</span>
				</div>
				<div>
					<div>
						<h1>Pizza Hut</h1>
						<p>$4.95</p>
					</div>
					<span>Shrimp, Squid, Pineapple</span>
				</div>
				
			</div>
			</div>
		</div>
	);
};

export default MenuCallToAction;
