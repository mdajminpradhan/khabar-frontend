import cogoToast from 'cogo-toast';
import React, { useEffect, useState } from 'react';
import '../assets/sass/admin/pages/newpost.scss';
import AdminBase from '../core/admin/AdminBase';
import Form from '../core/admin/Form';
import { get_all_categories, get_post_by_id, updatePost } from './helper/apicall';

const UpdatePost = ({ match, history }) => {
	const [ categories, setCategories ] = useState([]);
	const [ createPostNow, setCreatePostNow ] = useState(false);
	const [ details, setDetails ] = useState({});

	// get post data by id
	const preloadPostData = async (postid) => {
		try {
			const response = await get_post_by_id(postid);

			if (response.error) {
				cogoToast.error(response.error, { position: 'top-right' });
			} else {
				setDetails(response);
			}
		} catch (error) {
			cogoToast.error(error, { position: 'top-right' });
		}
	};

	// get categories from server
	const preload_categories = async () => {
		try {
			const response = await get_all_categories();
			setCategories(response);
		} catch (error) {
			cogoToast.error(error, { position: 'top-right' });
		}
	};

	// trigger function before page load
	useEffect(() => {
		preloadPostData(match.params.postid);
		preload_categories();
	}, []);

	// running creat post function on publish
	const getPubLishActionFromChild = (action) => {
		setCreatePostNow(action);
	};

	// creating post
	const gettingDataFromChild = (title, postcategories, description, tags, image) => {
		updatePost(title, postcategories, description, tags, image, match.params.postid)
			.then((response) => {
				console.log(response);
				if (!response.error) {
					history.push('/admin/posts');
					cogoToast.loading('Updating a post...').then(() => {
						cogoToast.success('Your have updated your post successfully...', {
							position: 'top-center'
						});
					});
				} else if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				}
			})
			.catch((error) => {
				console.log(error);
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	// publish post based on form action
	useEffect(() => {
		if (createPostNow) {
			gettingDataFromChild();
		}
	}, []);

	return (
		<AdminBase>
			<div className="newpost">
				<div className="container">
					<Form
						fetchedCategories={categories}
						sendDataToPapa={gettingDataFromChild}
						getCreatePostAction={getPubLishActionFromChild}
						dataById={details}
					/>
				</div>
			</div>
		</AdminBase>
	);
};

export default UpdatePost;
