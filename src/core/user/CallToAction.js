import React from 'react';
import '../../assets/sass/core/calltoaction.scss';
import OFF from '../../assets/images/homepage/calltoaction/off.png';

const CallToAction = () => {
	return (
		<div className="calltoaction">
			<div className="container">
				<div className="calltoaction__left">
					<img src={OFF} alt="off" />
				</div>
				<div className="calltoaction__right">
					<h3>Hot Fresh</h3>
					<h1>HOT DOG</h1>
					<button>ORDER NOW</button>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
