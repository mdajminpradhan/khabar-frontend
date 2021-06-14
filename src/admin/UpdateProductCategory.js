import React, { useEffect, useState } from 'react';
import '../assets/sass/admin/pages/createAndUpdatecategory.scss';
import AdminBase from '../core/admin/AdminBase';
import { isAuthenticated } from '../auth/helper/apicall';
import { get_product_category_by_id, update_product_category } from './helper/apicall';
import cogoToast from 'cogo-toast';

function UpdateProductCategory({match, history}) {
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

		update_product_category(category, match.params.category_id, user._id)
			.then((response) => {
				if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				} else if (response) {
					cogoToast.loading('Updating a category...').then(() => {
						cogoToast.success('Your have updated category successfully...', {
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

	// get categories from server
	const preload_category = (cateid) => {
		get_product_category_by_id(cateid)
			.then((response) => {
				setCategory(response.title);
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
						<input type="text" id="cate" value={category} onChange={handleChange} required />

						<input type="submit" className="primary" value="Update Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
}

export default UpdateProductCategory;
