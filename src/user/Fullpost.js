import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/sass/user/fullpost.scss';
import '../assets/sass/core/post.scss';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import Post from '../core/user/Post';
import Sidebar from '../core/user/Sidebar';
import parse from 'html-react-parser';
import cogoToast from 'cogo-toast';
import thumbnail from '../assets/images/homepage/posts/post.jpg';
import { getPostDataById } from './helper/apicalls';

const Fullpost = ({ match }) => {
	const [ details, setDetails ] = useState({});

	const preloadPost = (postid) => {
		getPostDataById(postid).then((response) => setDetails(response)).catch((error) => {
			console.log(error);
		});
	};

	useEffect(() => {
		preloadPost(match.params.postid);
	}, []);

	console.log(details);
	if (details && details.author && details.author.name) {
		console.log('Author Name :', details.author.name);
	}

	return (
		<Base>
			<div className="fullpost">
				<Breadcum title="Our Blog" description={details.title} />
				<div className="container">
					<div className="fullpost__container">
						<div className="fullpost__left">
							<div className="post">
								<div className="post__thumbnail">
									<img src={thumbnail} alt="post thumbnail" />
								</div>
								<div className="post__content">
									{details &&
									details.category &&
									details.author &&
									details.author.name && (
										<small>
											{details.category[0].title} / {new Date(details.date).toDateString()} / post
											by {details.author.name}
										</small>
									)}

									<h1>{details.title}</h1>

									{details && details.description && parse(details.description)}
								</div>
							</div>

							<div className="prevpost">
								<small>PREV POST</small>
								<Link to="/post">
									The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese
								</Link>
							</div>

							<div className="comment">
								<form action="">
									<div className="input">
										<input type="text" placeholder="Your name *" required />
										<input type="email" placeholder="Email address *" required />
										<input type="text" placeholder="Your website" />
									</div>
									<textarea name="" id="" cols="30" rows="10" placeholder="Your comment" />
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
