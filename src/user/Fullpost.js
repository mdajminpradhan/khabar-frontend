import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/sass/user/fullpost.scss';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import Post from '../core/user/Post';
import Sidebar from '../core/user/Sidebar';

const Fullpost = () => {
	return (
		<Base>
			<div className="fullpost">
				<Breadcum title="Our Blog" description="Post title" />
				<div className="container">
					<div className="fullpost__container">
						<div className="fullpost__left">
							<Post />


					<div className="prevpost">
						<small>PREV POST</small>
						<Link to="/post">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese</Link>
					</div>

					<div className="comment">
						<form action="">
							<div className="input">
								<input type="text" placeholder="Your name *" required />
								<input type="email" placeholder="Email address *" required />
								<input type="text" placeholder="Your website" />
							</div>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your comment"></textarea>
                            <button>POST COMMENT</button>
						</form>
					</div>
						</div>
						<div className="fullpost__right">
							<Sidebar />
						</div>
					</div>

				</div>
			</div>
		</Base>
	);
};

export default Fullpost;
