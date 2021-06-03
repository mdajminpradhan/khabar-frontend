import React from 'react';
import '../../assets/sass/core/sidebarsearch.scss';
import { FiSearch } from 'react-icons/fi';

const SidebarSearch = () => {
	return (
		<div className="search">
			<form action="">
				<input type="text" placeholder="Search..." required />
				<FiSearch />
			</form>
		</div>
	);
}

export default SidebarSearch;
