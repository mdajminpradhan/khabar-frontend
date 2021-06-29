import React, { useEffect, useState } from 'react';
import '../assets/sass/admin/pages/products.scss';
import AdminBase from '../core/admin/AdminBase';
import { Link } from 'react-router-dom';
import Table from '../core/admin/Table';
import { delete_product, getDataPicture, get_all_products } from './helper/apicall';
import { isAuthenticated } from '../auth/helper/apicall';
import cogoToast from 'cogo-toast';
import axios from 'axios';

const Products = () => {
	const [ products, setProducts ] = useState([]);
	const [ image, setImage ] = useState('');

	// getting logged user info from localstorage
	const { user } = isAuthenticated();

	// get products from server
	const preload_products = () => {
		get_all_products()
			.then((response) => {
				setProducts(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// deleting product
	const deleteProduct = (productid) => {
		delete_product(productid, user._id)
			.then(() => {
				cogoToast.loading('Deleting a product...').then(() => {
					cogoToast.success('Your have deleted a product successfully...', {
						position: 'top-center'
					});
					preload_products();
				});
			})
			.catch((error) => {
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	// trigger function before page load
	useEffect(() => {
		preload_products();
	}, []);

	// get product picture
	useEffect(
		() => {
			products.map((product) =>
				getDataPicture('productpicture', product._id)
					.then((response) => {
						setImage(response)
					})
					.catch((error) => {
						cogoToast.error(error, {position: 'top-right'})
					})
			);
		},
		[ products ]
	);

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
						<Table data={products} image={image} deleteData={deleteProduct} />
					</div>
				</div>
			</div>
		</AdminBase>
	);
};

export default Products;
