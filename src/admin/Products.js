import React from 'react';
import '../assets/sass/admin/pages/products.scss';
import AdminBase from '../core/admin/AdminBase';
import { Link } from 'react-router-dom';
import Table from '../core/admin/Table';

const Products = () => {
	return (
		<AdminBase>
			<div className="adminproducts">
				<div className="container">
					<div className="adminproducts__header">
						<span>All products</span>
						<Link to="/admin/product/new" className="primary">
							Add New
						</Link>
					</div>
					<div className="adminproducts__body">
						<Table />
					</div>
				</div>
			</div>
		</AdminBase>
	);
};

export default Products;
