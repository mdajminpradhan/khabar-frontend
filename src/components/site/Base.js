import React from 'react';
import Header from './Header'
import FooterTop from './FooterTop'
import Footer from './Footer'

const Base = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<FooterTop />
			<Footer />
		</div>
	);
};

export default Base;
