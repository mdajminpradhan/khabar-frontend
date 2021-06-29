import React from 'react';
import '../../assets/sass/core/post.scss';
import thumbnail from '../../assets/images/homepage/posts/post.jpg';
import { Link } from 'react-router-dom';

const Post = ({ data }) => {
	return (
		<div className="post">
			<div className="post__thumbnail">
				<img src={thumbnail} alt="post thumbnail" />
			</div>
			<div className="post__content">
				<small>Uncategorized / September 7, 2020 / post by mac</small>

				<h1>{data.title}</h1>

				{data.description}

				<Link to={`/post/${data._id}`}>
					<button>Read more</button>
				</Link>
			</div>
		</div>
	);
};

export default Post;
