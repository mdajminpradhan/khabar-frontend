import React, { useEffect, useState } from 'react';
import '../assets/sass/admin/pages/newproduct.scss';
import AdminBase from '../core/admin/AdminBase';
import ProductForm from '../core/admin/ProductForm';
import cogoToast from 'cogo-toast';
import { get_all_product_categories, createProduct } from './helper/apicall';

const NewProduct = ({ history }) => {
	const [ categories, setCategories ] = useState([]);
	const [ createProductNow, setCreateProductNow ] = useState(false);

	// get categories from server
	const preload_categories = async () => {
		try {
			const response = await get_all_product_categories();
			setCategories(response);
		} catch (error) {
			cogoToast.error(error, { position: 'top-right' });
		}
	};

	// trigger function before page load
	useEffect(() => {
		preload_categories();
	}, []);

	// running creat product function on publish
	const getPubLishActionFromChild = (action) => {
		setCreateProductNow(action);
		console.log(action);
	};

	// creating product
	const gettingDataFromChild = (title, categories, shortdescription, longdescription, top, price, specialprice, image) => {
		createProduct(title, categories, shortdescription, longdescription, top, price, specialprice, image)
			.then((response) => {
				if (!response.error) {
					history.push('/admin/products');
					cogoToast.loading('Creating a product...').then(() => {
						cogoToast.success('Your have created a new product successfully...', {
							f: 'top-center'
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

	// publish product based on form action
	useEffect(() => {
		if (createProductNow) {
			gettingDataFromChild();
		}
	}, []);

	return (
		<AdminBase>
			<div className="newpost">
				<div className="container">
					<ProductForm
						fetchedCategories={categories}
						sendDataToPapa={gettingDataFromChild}
						getCreateAction={getPubLishActionFromChild}
					/>
				</div>
			</div>
		</AdminBase>
	);
};

export default NewProduct;
