import React from 'react';
import '../../assets/sass/core/pagination.scss';

function Pagination({ postsPerPage, totalPosts, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			{pageNumbers.map((number) => (
				<li onClick={() => paginate(number)} key={number}>
					<span>{number}</span>
				</li>
			))}
		</ul>
	);
}

export default Pagination;
