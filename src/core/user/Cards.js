import React from 'react';
import '../../assets/sass/core/cards.scss';
import CardImage from '../../assets/images/homepage/card/card.png';
// import CardImageTwo from '../../assets/images/homepage/card/card-2.png';
import CardImageThree from '../../assets/images/homepage/card/card-3.png';
import { Link } from 'react-router-dom';

const Cards = () => {
	return (
		<div className="cards">
			<div className="card">
				<div>
					<h3>Fast Food</h3>
					<h1>meals</h1>

					<p>new phenomenon </p>
					<p> burger taste</p>
					<h2>$19.90</h2>
					<Link TO="/shop">
						<button>ORDER NOW</button>
					</Link>
				</div>
                
				<img src={CardImage} alt="card" />
			</div>
			<div className="card">
				<div>
					<h3>Fast Food</h3>
					<h1>meals</h1>

					<p>new phenomenon </p>
					<p> burger taste</p>
					<h2>$19.90</h2>
					<Link TO="/shop">
						<button>ORDER NOW</button>
					</Link>
				</div>
                
				<img src={CardImageThree} alt="card" />
			</div>
			<div className="card">
				<div>
					<h3>Fast Food</h3>
					<h1>meals</h1>

					<p>new phenomenon </p>
					<p> burger taste</p>
					<h2>$19.90</h2>
					<Link TO="/shop">
						<button>ORDER NOW</button>
					</Link>
				</div>
                
				<img src={CardImageThree} alt="card" />
			</div>
		</div>
	);
};

export default Cards;
