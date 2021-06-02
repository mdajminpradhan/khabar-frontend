import React from 'react';
import '../../assets/sass/core/homeposts.scss';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Post from './Post';

const HomePosts = () => {
	return (
		<div className="homeposts">
			<div className="container">
				<div className="homeposts__header">
					<h1>Latest news</h1>
					<Link to="/blog">
						See all <IoIosArrowForward />
					</Link>
				</div>
				<div className="homeposts__body">
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
};

export default HomePosts;
