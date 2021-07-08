import React, { Fragment, useState, useEffect } from 'react';
import '../assets/sass/user/blog.scss';
import cogoToast from 'cogo-toast';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import Pagination from '../core/user/Pagination';
import Post from '../core/user/Post';
import Sidebar from '../core/user/Sidebar';
import { getBlogPosts } from './helper/apicalls';
import axios from 'axios';

const Blog = () => {
	const [ posts, setPosts ] = useState([]);
	const [ image, setImage ] = useState('');

	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage, setPostsPerPage ] = useState(10);

	// load post before page load
	const preloadPosts = () => {
		getBlogPosts()
			.then((response) => {
				console.log(response);
				setPosts(response);
			})
			.catch((error) => {
				console.log(error);
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	// trigger functions before page load
	useEffect(() => {
		preloadPosts();
	}, []);

	// get post picture
	useEffect(
		() => {
			posts.map((post) =>
				axios
					.post(`/postpicture`, {
						id: post._id
					})
					.then((response) => {
						setImage(response.data.picture);
					})
					.catch((error) => console.log(error))
			);
		},
		[ posts ]
	);

	// get current page
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<Base>
			<Breadcum title="Our Blog" description="Blog" />
			<div className="blog">
				<div className="container">
					<div className="blog__left">
						{currentPosts.map((post, index) => {
							return (
								<Fragment>
									<Post data={post} image={image} key={index} />
								</Fragment>
							);
						})}
						<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
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
