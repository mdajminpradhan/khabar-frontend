import React from 'react';
import Banner from '../core/user/Banner';
import Base from '../core/user/Base';
import CallToAction from '../core/user/CallToAction';
import HeroSection from '../core/user/HeroSection';
import Menus from '../core/user/Menus';
import Products from '../core/user/Products';
import TopRecipes from '../core/user/TopRecipes';
import Testimonials from '../core/user/Testimonials.js';
import Cards from '../core/user/Cards.js';
import HomePosts from '../core/user/HomePosts';

const Home = () => {
	return (
		<Base>
			<HeroSection />
			<Menus />
			<Banner />
			<Products />
			<CallToAction />
			<TopRecipes />
			<Testimonials />
			<Cards />
			<HomePosts />
		</Base>
	);
};

export default Home;
