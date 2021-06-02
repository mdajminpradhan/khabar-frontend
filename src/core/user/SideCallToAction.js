import React from 'react';
import '../../assets/sass/core/sidecalltoaction.scss';
import SideCallImage from  '../../assets/images/homepage/toprecipes/sidecalltoaction-2.png';

const SideCallToAction = () => {
	return (
		<div className="sidecalltoaction">
			<h2>Super Delicious</h2>
			<h1>CHICKEN</h1>

			<h4>call us now:</h4>
			<h3>1-800-555-333</h3>
			<img src={SideCallImage} alt="" />
		</div>
	);
};

export default SideCallToAction;
