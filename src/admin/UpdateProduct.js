import React, { useState, useEffect } from 'react';
import '../assets/sass/admin/pages/updateproduct.scss';
import AdminBase from '../core/admin/AdminBase';
import ProductForm from '../core/admin/ProductForm';
import cogoToast from 'cogo-toast';
import { get_all_product_categories, get_product_by_id, updateProduct } from './helper/apicall';

const UpdateProduct = ({ match, history }) => {
	const [ categories, setCategories ] = useState([]);
	const [ createProductNow, setCreateProductNow ] = useState(false);
	const [ details, setDetails ] = useState({});

	console.log(match.params.productid);

	// get product data by id
	const preloadProductData = async (productid) => {
		try {
			const response = await get_product_by_id(productid);

			if (response.error) {
				cogoToast.error(response.error, { position: 'top-right' });
			} else {
				setDetails(response);
				console.log(response);
			}
		} catch (error) {
			cogoToast.error(error, { position: 'top-right' });
		}
	};

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
		preloadProductData(match.params.productid);
		preload_categories();
	}, []);

	// running creat product function on publish
	const getPubLishActionFromChild = (action) => {
		setCreateProductNow(action);
	};

	// const updateProduct = (title, productcategories, description, tags, image, test) => {
	// 	console.log(test)
	// }

	// creating product
	const gettingDataFromChild = (title, productcategories, description, tags, image, id) => {
		updateProduct(title, productcategories, description, tags, image, id)
			// .then((response) => {
			// 	console.log(response);
			// 	if (!response.error) {
			// 		history.push('/admin/products');
			// 		cogoToast.loading('Updating a product...').then(() => {
			// 			cogoToast.success('Your have updated a product successfully...', {
			// 				position: 'top-center'
			// 			});
			// 		});
			// 	} else if (response.error) {
			// 		cogoToast.error(response.error, { position: 'top-right' });
			// 	}
			// })
			// .catch((error) => {
			// 	console.log(error);
			// 	cogoToast.error(error, { position: 'top-right' });
			// });
	};

	// publish product based on form action
	useEffect(() => {
		if (createProductNow) {
			gettingDataFromChild();
		}
	}, []);

	return (
		<AdminBase>
			<div className="newproduct">
				<div className="container">
					<ProductForm
						fetchedCategories={categories}
						sendDataToPapa={gettingDataFromChild}
						getCreateAction={getPubLishActionFromChild}
						dataById={details}
					/>
				</div>
			</div>
		</AdminBase>
	);
};

export default UpdateProduct;
