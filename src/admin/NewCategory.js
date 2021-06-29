import React, { useState } from 'react';
import '../assets/sass/admin/pages/createAndUpdatecategory.scss';
import cogoToast from 'cogo-toast';
import { isAuthenticated } from '../auth/helper/apicall';
import AdminBase from '../core/admin/AdminBase';
import { newCategory } from './helper/apicall';

function NewCategory({ history }) {
	const [ details, setDetails ] = useState({
		title: '',
		icon: '',
		formdata: new FormData()
	});

	const { title, icon } = details;

	// getting logged in user details from localhost
	const { user } = isAuthenticated();

	// changing value on user type interaction
	const handleChange = (name) => (event) => {
		const value = name === 'icon' ? event.target.files[0] : event.target.value;

		setDetails({ ...details, [name]: value });
	};

	// trigger the function on submit
	const handleSubmit = (event) => {
		event.preventDefault();

		newCategory(title, icon, user._id)
			.then((response) => {
				if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				} else if (response) {
					cogoToast.loading('Creating a category...').then(() => {
						cogoToast.success('Your have created a new category successfully...', {
							position: 'top-center'
						});
						history.push('/admin/postcategories');
					});

					setDetails({ ...details, title: '', icon: '' });
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

						<label htmlFor="icon">Category Icon</label>
						<input type="file" id="icon" onChange={handleChange('icon')} required />
						{icon ? <img src={URL.createObjectURL(icon)} className="icon" alt="" /> : ''}

						<input type="submit" className="primary" value="Add Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
}

export default NewCategory;
