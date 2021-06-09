import React from 'react';
import '../../assets/sass/core/sidebarcategories.scss'
import { GiHamburger } from "react-icons/gi";

const SidebarCategories = () => {
	return (
		<div className="categories">
			<h3>Categories</h3>
            <ul>
				<li>
					<div>
						<GiHamburger />
						<span>Burgers</span>
					</div>
					<span>(9)</span>
				</li>
				<li>
					<div>
						<GiHamburger />
						<span>Burgers</span>
					</div>
					<span>(9)</span>
				</li>
				<li>
					<div>
						<GiHamburger />
						<span>Burgers</span>
					</div>
					<span>(9)</span>
				</li>
				<li>
					<div>
						<GiHamburger />
						<span>Burgers</span>
					</div>
					<span>(9)</span>
				</li>
				<li>
					<div>
						<GiHamburger />
						<span>Burgers</span>
					</div>
					<span>(9)</span>
				</li>
				<li>
					<div>
						<GiHamburger />
						<span>Burgers</span>
					</div>
					<span>(9)</span>
				</li>
			</ul>
		</div>
	);
};

export default SidebarCategories;
