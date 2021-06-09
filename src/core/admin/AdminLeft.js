import React from 'react';
import '../../assets/sass/admin/components/adminleft.scss';
import logo from '../../assets/images/global/khabar.png';
import { FiExternalLink } from 'react-icons/fi';
import { FcSurvey, FcViewDetails, FcPaid, FcNews } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return 'active';
	} else {
		return '';
	}
};

const AdminLeft = () => {
	const history = useHistory();

	return (
		<div className="adminleft">
			<div className="adminleft__top">
				<div className="adminleft__logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="adminleft__menu">
					<ul>
						<li>
							<Link to="/admin" className={`${currentTab(history, '/admin')}`}>
								<FcNews />
								<span>Dashboard</span>
							</Link>
							<Link to="/admin/posts" className={`${currentTab(history, '/admin/posts')}`}>
								<FcSurvey />
								<span>Posts</span>
							</Link>
							<Link to="/admin/categories/post" className={`${currentTab(history, '/admin/categories/post')}`}>
								<FcViewDetails />
								<span>Post Categories</span>
							</Link>
							<Link to="/admin/products" className={`${currentTab(history, '/admin/products')}`}>
								<FcPaid />
								<span>Products</span>
							</Link>
							<Link to="/admin/categories/product" className={`${currentTab(history, '/admin/categories/product')}`}>
								<FcViewDetails />
								<span>Product Categories</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="adminleft__bottom">
				<a href="/" target="__blank">
					<span>Visit Website</span>
					<FiExternalLink />
				</a>
			</div>
		</div>
	);
};

export default AdminLeft;
