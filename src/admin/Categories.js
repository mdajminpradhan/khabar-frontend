import React from 'react';
import '../assets/sass/admin/pages/categories.scss';
import AdminBase from '../core/admin/AdminBase';
import { Link } from 'react-router-dom';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';

const Categories = () => {

	return (
		<AdminBase>
			<div className="admincategories">
				<div className="container">
					<div className="categories__header">
						<span>All categories</span>
						<Link to="/admin/category/post/new" className="primary">
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
							<div className="categories__bodyBottomCategory">
								<div>01</div>
								<div>Burger</div>
								<div className="actions">
									<Link to="/admin/category/post/update">
										<HiPencil />
									</Link>
									<AiOutlineDelete />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminBase>
	);
};

export default Categories;
