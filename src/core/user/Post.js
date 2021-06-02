import React from 'react';
import '../../assets/sass/core/post.scss';
import thumbnail from '../../assets/images/homepage/posts/post.jpg'
import { Link } from 'react-router-dom';

const Post = () => {
	return (
		<div className="post">
			<div className="post__thumbnail">
				<img src={thumbnail} alt="post thumbnail" />
			</div>
			<div className="post__content">
				<small>Uncategorized / September 7, 2020 / post by mac</small>

				<h1>10 food you can try to make at your home in your free time</h1>

				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit Nostrum inventore Ut dolor laborum reiciendis corrupti dolore
				</p>

				<Link to="/post/postid">
					<button>Read more</button>
				</Link>
			</div>
		</div>
	);
};

export default Post;
