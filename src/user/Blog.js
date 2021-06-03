import React from 'react';
import '../assets/sass/user/blog.scss';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import Post from '../core/user/Post';
import Sidebar from '../core/user/Sidebar';

const Blog = () => {
	return (
		<Base>
			<Breadcum title="Our Blog" description="Blog" />
			<div className="blog">
				<div className="container">
					<div className="blog__left">
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</div>
					<div className="blog__right">
						<Sidebar />
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Blog;
