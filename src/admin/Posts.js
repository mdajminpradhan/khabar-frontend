import React, { useEffect, useState } from 'react';
import '../assets/sass/admin/pages/posts.scss';
import AdminBase from '../core/admin/AdminBase';
import { Link } from 'react-router-dom';
import Table from '../core/admin/Table';
import { delete_post, get_all_posts } from './helper/apicall';
import { isAuthenticated } from '../auth/helper/apicall';
import cogoToast from 'cogo-toast';
import axios from 'axios';

const Posts = () => {
	const [ posts, setPosts ] = useState([]);
	const [ image, setImage ] = useState('');

	// getting logged user info from localstorage
	const { user } = isAuthenticated();

	// get posts from server
	const preload_posts = () => {
		get_all_posts()
			.then((response) => {
				setPosts(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// deleting post
	const deletePost = (postid) => {
		delete_post(postid, user._id)
			.then(() => {
				cogoToast.loading('Deleting a post...').then(() => {
					cogoToast.success('Your have deleted a post successfully...', {
						position: 'top-center'
					});
					preload_posts();
				});
			})
			.catch((error) => {
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	// trigger function before page load
	useEffect(() => {
		preload_posts();
	}, []);

	// get post picture
	useEffect(
		() => {
			// setTimeout(() => {
				// if (posts.length > 1) {
					posts.map((post) =>
						axios
							.get(`/postpicture/${post._id}`)
							.then((response) => {
								// console.log(response);
								setImage(response.data);
							})
							.catch((error) => console.log(error))
					);
				// }
			// }, 1000);
		},
		[ posts ]
	);

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
						<Table data={posts} image={image} deleteData={deletePost} />
					</div>
				</div>
			</div>
		</AdminBase>
	);
};

export default Posts;
