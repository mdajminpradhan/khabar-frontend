import React from 'react';
import '../../assets/sass/core/post.scss';
import thumbnail from '../../assets/images/homepage/posts/post.jpg';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const Post = ({ data, image }) => {
	let date = new Date(data.date);

	console.log(image);

	return (
		<div className="post">
			<div className="post__thumbnail">
				<img src={image} alt="post thumbnail" />
			</div>
			<div className="post__content">
				<small>
					{data.category[0].title} / {new Date(data.date).toDateString()} / post by {data.author.name}
				</small>

				<h1>{data.title}</h1>

				{parse(data.description)}

				<Link to={`/post/${data._id}`}>
					<button>Read more</button>
				</Link>
			</div>
		</div>
	);
};

export default Post;
