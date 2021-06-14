import React, { useState } from 'react';
import '../assets/sass/admin/pages/createAndUpdatecategory.scss';
import AdminBase from '../core/admin/AdminBase';
import cogoToast from 'cogo-toast';
import { isAuthenticated } from '../auth/helper/apicall';
import { newProductCategory } from './helper/apicall';

const NewProductCategory = ({ history }) => {
	const [ category, setCategory ] = useState();

	// getting logged in user details from localhost
	const { user } = isAuthenticated();

	// changing value on user type interaction
	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	// trigger the function on submit
	const handleSubmit = (event) => {
		event.preventDefault();

		newProductCategory(category, user._id)
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

					setCategory('');
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
						<input type="text" id="cate" value={category} onChange={handleChange} required />

						<input type="submit" className="primary" value="Add Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
};

export default NewProductCategory;
