import React from 'react';
import '../../assets/sass/core/header.scss'
import TopBar from './TopBar';
import Logo from '../../assets/images/global/logo.png';
import Bike from '../../assets/images/homepage/header/food-delivery.svg';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';

const Header = () => {
	return (
		<div className="header">
			<TopBar />

			<div className="container">
				<div className="header__left">
					<img src={Logo} alt="site logo" />
				</div>
				<div className="header__middle">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="">About</Link>
						</li>
						<li>
							<Link to="">Shop</Link>
						</li>
						<li>
							<Link to="">Blog</Link>
						</li>
						<li>
							<Link to="">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="header__right">
					<div className="call">
						<img src={Bike} alt="bike" />
						<div>
							<p>Call and Order in</p>
							<pre>+1 718-904-4450</pre>
						</div>
					</div>
					<div className="search">
						<FiSearch />
					</div>
					<Link to="/loginaccount" className="user">
						<FiUser />
					</Link>
					<Link to="/wishlist" className="wishlist">
						<FiHeart />
					</Link>
					<Link to="/cart" className="cart">
						<IoBagOutline />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
