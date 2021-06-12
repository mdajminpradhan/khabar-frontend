import React from 'react';
import '../assets/sass/admin/pages/posts.scss';
import AdminBase from '../core/admin/AdminBase';
import { Link } from 'react-router-dom';
import Table from '../core/admin/Table';

const Posts = () => {

	return (
		<AdminBase>
			<div className="posts">
				<div className="container">
					<div className="posts__header">
						<span>All posts</span>
						<Link to="/admin/post/new" className="primary">
							Add New
						</Link>
					</div>
					<div className="posts__body">
						<Table />
					</div>
				</div>
			</div>
		</AdminBase>
	);
};

export default Posts;
