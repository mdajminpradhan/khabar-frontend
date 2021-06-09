import React from 'react';
import '../assets/sass/admin/pages/createAndUpdatecategory.scss';
import AdminBase from '../core/admin/AdminBase';

function UpdateProductCategory() {
	return (
		<AdminBase>
			<div className="newcategory">
				<div className="container">
					<form action="">
						<label htmlFor="cate">Category title</label>
						<input type="text" id="cate" required />

						<input type="submit" className="primary" value="Update Category" />
					</form>
				</div>
			</div>
		</AdminBase>
	);
}

export default UpdateProductCategory;
