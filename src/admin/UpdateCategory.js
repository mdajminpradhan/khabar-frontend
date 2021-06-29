import React, { useState, useEffect } from 'react';
import '../assets/sass/admin/pages/createAndUpdatecategory.scss';
import AdminBase from '../core/admin/AdminBase';
import cogoToast from 'cogo-toast';
import { isAuthenticated } from '../auth/helper/apicall';
import { get_category_by_id, update_category } from './helper/apicall';

function UpdateCategory({ match, history }) {
	const [ details, setDetails ] = useState({
		title: '',
		icon: '',
		dbicon: '',
		formdata: new FormData()
	});

	const { title, icon, dbicon } = details;
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

		update_category(title, icon, match.params.category_id, user._id)
			.then((response) => {
				if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				} else if (response) {
					cogoToast.loading('Updating a category...').then(() => {
						cogoToast.success('Your have updated category successfully...', {
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

	// get categories from server
	const preload_category = (cateid) => {
		get_category_by_id(cateid)
			.then((response) => {
				setDetails({
					...details,
					title: response.title,
					dbimage: response.image,
					dbicon: response.icon
				});
			})
			.catch((error) => {
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	// trigger function before page load
	useEffect(() => {
		preload_category(match.params.category_id);
	}, []);

	return (
		<AdminBase>
			<div className="newcategory">
				<div className="container">
					<form onSubmit={handleSubmit}>
						<label htmlFor="cate">Category title</label>
						<input type="text" id="cate" value={title} onChange={handleChange('title')} required />

						<label htmlFor="icon">Category Icon</label>
						<input type="file" id="icon" onChange={handleChange('icon')} />
						{icon ? (
							<img src={URL.createObjectURL(icon)} className="icon" alt="" />
						) : (
							<img src={dbicon} className="icon" alt="" />
						)}

						<input type="submit" className="primary" value="Update Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
}

export default UpdateCategory;
