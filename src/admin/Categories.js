import React, { useEffect, useState } from 'react';
import '../assets/sass/admin/pages/categories.scss';
import AdminBase from '../core/admin/AdminBase';
import { Link } from 'react-router-dom';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { delete_category, get_all_categories } from './helper/apicall';
import { isAuthenticated } from '../auth/helper/apicall';
import cogoToast from 'cogo-toast';

const Categories = () => {
	const [ categories, setCategories ] = useState([]);

	// getting logged user info from localstorage
	const { user } = isAuthenticated();

	// get categories from server
	const preload_categories = () => {
		get_all_categories()
			.then((response) => {
				setCategories(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// trigger function before page load
	useEffect(() => {
		preload_categories();
	}, []);

	// deleting category
	const deleteCategory = (cateId, userid) => {
		delete_category(cateId, userid)
			.then((response) => {
				cogoToast.loading('Deleting a category...').then(() => {
					cogoToast.success('Your have deleted a category successfully...', {
						position: 'top-center'
					});
					preload_categories();
				});
			})
			.catch((error) => {
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	// initial category number count
	let count = 1;

	return (
		<AdminBase>
			<div className="admincategories">
				<div className="container">
					<div className="categories__header">
						<span>All categories</span>
						<Link to="/admin/postcategory/new" className="primary">
							Add New
						</Link>
					</div>
					<div className="categories__body">
						<div className="categories__bodyHeader">
							<div>No.</div>
							<div>Category</div>
							<div>Action</div>
						</div>
						<div className="categories__bodyBottom">
							{categories.map((cate, index) => (
								<div key={index} className="categories__bodyBottomCategory">
									<div>{count++}</div>
									<div>{cate.title}</div>
									<div className="actions">
										<Link to={`/admin/postcategory/update/${cate._id}`}>
											<HiPencil />
										</Link>
										<AiOutlineDelete
											onClick={() => {
												deleteCategory(cate._id, user._id);
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</AdminBase>
	);
};

export default Categories;
