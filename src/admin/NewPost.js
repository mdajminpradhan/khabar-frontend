import React, { useEffect, useState } from 'react';
import cogoToast from 'cogo-toast';
import '../assets/sass/admin/pages/newpost.scss';
import AdminBase from '../core/admin/AdminBase';
import Form from '../core/admin/Form';
import { get_all_categories, createPost } from './helper/apicall';

const NewPost = ({ history }) => {
	const [ categories, setCategories ] = useState([]);
	const [ createPostNow, setCreatePostNow ] = useState(false);

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
		preload_categories();
	}, []);

	// running creat post function on publish
	const getPubLishActionFromChild = (action) => {
		setCreatePostNow(action);
	};

	// creating post
	const gettingDataFromChild = (title, postcategories, description, tags, image) => {
		createPost(title, postcategories, description, tags, image)
			.then((response) => {
				console.log(response);
				if (!response.error) {
					history.push('/admin/posts');
					cogoToast.loading('Creating a post...').then(() => {
						cogoToast.success('Your have created a new post successfully...', {
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
					/>
				</div>
			</div>
		</AdminBase>
	);
};

export default NewPost;
