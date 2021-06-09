import React from 'react';
import '../assets/sass/user/products.scss';
import Base from '../core/user/Base';
import BestDealFood from '../core/user/BestDealFood';
import Breadcum from '../core/user/Breadcum';
import Product from '../core/user/Product';
import SidebarCategories from '../core/user/SidebarCategories';
import SidebarSearch from '../core/user/SidebarSearch';

const Products = () => {
	return (
		<Base>
			<Breadcum title="Products" description="Products" />

			<div className="productpage">
				<div className="container">
					<div className="productpage__left">
						<div className="productpage__leftheader">
							<small> Showing 1–12 of 54 results</small>
							<div>
								<select name="orderby" class="orderby">
									<option value="menu_order" selected="selected">
										Default sorting
									</option>
									<option value="popularity">Sort by popularity</option>
									<option value="rating">Sort by average rating</option>
									<option value="date">Sort by latest</option>
									<option value="price">Sort by price: low to high</option>
								</select>
							</div>
						</div>
						<div className="productpage__leftProducts">
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
					</div>
					<div className="productpage__right">
						<SidebarCategories />

						<SidebarSearch />

						<div className="product__rightFilterBySize">
							<h3>Filter by size</h3>

							<ul>
								<li>L</li>
								<li>M</li>
								<li>S</li>
								<li>X</li>
							</ul>
						</div>

						<div className="product__rightBestDeals">
							<h3>Best Deals</h3>
							<BestDealFood />
							<BestDealFood />
							<BestDealFood />
						</div>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Products;
