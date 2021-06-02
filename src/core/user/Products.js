import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/sass/core/products.scss';
import Product from './Product';

const Products = () => {
	return (
		<div className="products">
			<div className="container">
				<div className="products__header">
					<h1>Popular dishes</h1>
					<ul>
						<li>PIZZA</li>
						<li>SUSHI</li>
						<li>SALATS</li>
						<li>BURGER</li>
						<li>DERSET</li>
					</ul>
				</div>
				<div className="products__body">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
				<Link to="/products">
					<button>ALL PRODUCTS</button>
				</Link>
			</div>
		</div>
	);
};

export default Products;
