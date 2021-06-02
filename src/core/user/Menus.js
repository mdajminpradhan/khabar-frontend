import React from 'react';
import '../../assets/sass/core/menus.scss';
import MenuImage from '../../assets/images/homepage/menus/combo.png';
import { Link } from 'react-router-dom';

const Menus = () => {
	return (
		<div className="menus">
			<Link to="/menus">
				<button>Menus</button>
			</Link>
			<div className="container">
				<ul>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
					<li>
						<img src={MenuImage} alt="menu" />
						<span>COMBO</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menus;
