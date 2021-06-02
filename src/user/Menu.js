import React from 'react';
import Base from '../core/user/Base';
import Breadcum from '../core/user/Breadcum';
import MenuCallToAction from '../core/user/MenuCallToAction';
import MenuProducts from '../core/user/MenuProducts';

const Menu = () => {
	return (
		<Base>
			<Breadcum title="Menu Restaurant" description="Menu Restaurant" />

			<MenuProducts />
			<MenuCallToAction />
		</Base>
	);
};

export default Menu;
