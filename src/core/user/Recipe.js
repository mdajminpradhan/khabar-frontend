import React from 'react';
import '../../assets/sass/core/recipe.scss';
import RecipeImage from '../../assets/images/homepage/products/product-2.png';
import { FaStar, FaRegStar, FaShoppingBasket } from 'react-icons/fa';

const Recipe = ({ review = 'false', category = 'false', content = "false", contentContext }) => {
	return (
		<div className="recipe">
			<div className="recipe__body">
				<div className="recipe__bodyLeft">
					<img src={RecipeImage} alt="recipe" />
				</div>
				<div className="recipe__bodyRight">
					<h4>BBQ chicken breast</h4>
					{review === 'true' ? (
						<div className="review">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaRegStar />
						</div>
					) : null}
					{category === 'true' ? <small>Pasta</small> : null}
					{content ? <p className="content">{contentContext}</p> : null}
					<p className="price">£8.00</p>
					<FaShoppingBasket className="basket" />
				</div>
			</div>
		</div>
	);
};

export default Recipe;
