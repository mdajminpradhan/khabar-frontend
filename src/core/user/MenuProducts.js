import React from 'react';
import '../../assets/sass/core/menuproducts.scss';
import Recipe from './Recipe';

const MenuProducts = () => {
	return (
		<div className="menuproducts">
			<div className="container">
				<div className="menuproducts__header">
					<h1>Menus of the day</h1>

					<ul>
						<li>PIZZA</li>
						<li>SUSHI</li>
						<li>SALATS</li>
						<li>BURGER</li>
						<li>DERSET</li>
					</ul>
				</div>
				<div className="menuproducts__body">
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
					<Recipe
						review="true"
						content="true"
						contentContext=" Investing in a reusable water bottle that you can refill throughout the day. Carrying one…"
					/>
				</div>
			</div>
		</div>
	);
};

export default MenuProducts;
