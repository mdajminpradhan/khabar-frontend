import React from 'react';
import '../assets/sass/admin/pages/newcategory.scss';
import AdminBase from '../core/admin/AdminBase';

function NewCategory() {
	return (
		<AdminBase>
			<div className="newcategory">
				<div className="container">
					<form action="">
						<label htmlFor="cate">Category title</label>
						<input type="text" id="cate" required />

						<input type="submit" className="primary" value="Add Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
}

export default NewCategory;
