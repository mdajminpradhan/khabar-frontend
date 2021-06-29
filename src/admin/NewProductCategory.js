import React, { useState } from 'react';
import '../assets/sass/admin/pages/createAndUpdatecategory.scss';
import AdminBase from '../core/admin/AdminBase';
import cogoToast from 'cogo-toast';
import { isAuthenticated } from '../auth/helper/apicall';
import { newProductCategory } from './helper/apicall';

const NewProductCategory = ({ history }) => {
	const [ details, setDetails ] = useState({
		title: '',
		image: '',
		icon: '',
		formdata: new FormData()
	});

	const { title, image, icon } = details;

	// getting logged in user details from localhost
	const { user } = isAuthenticated();

	// changing value on user type interaction
	const handleChange = (name) => (event) => {
		let value;

		if (name === 'image') {
			value = event.target.files[0];
		} else if (name === 'icon') {
			value = event.target.files[0];
		} else {
			value = event.target.value;
		}

		setDetails({ ...details, [name]: value });
	};

	// trigger the function on submit
	const handleSubmit = (event) => {
		event.preventDefault();

		newProductCategory(title, image, icon, user._id)
			.then((response) => {
				if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				} else if (response) {
					cogoToast.loading('Creating a category...').then(() => {
						cogoToast.success('Your have created a new category successfully...', {
							position: 'top-center'
						});
						history.push('/admin/productcategories');
					});

					setDetails({ ...details, title: '', image: '', icon: '' });
				}
			})
			.catch((error) => {
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	return (
		<AdminBase>
			<div className="newcategory">
				<div className="container">
					<form onSubmit={handleSubmit}>
						<label htmlFor="cate">Category title</label>
						<input type="text" id="cate" value={title} onChange={handleChange('title')} required />

						<label htmlFor="image">Category Picture</label>
						<input type="file" id="image" onChange={handleChange('image')} required />

						<label htmlFor="icon">Category Icon</label>
						<input type="file" id="icon" onChange={handleChange('icon')} required />

						<input type="submit" className="primary" value="Add Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
};

export default NewProductCategory;
