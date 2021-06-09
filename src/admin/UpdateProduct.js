import React from 'react';
import '../assets/sass/admin/pages/updateproduct.scss';
import AdminBase from '../core/admin/AdminBase';
import Form from '../core/admin/Form';

const UpdateProduct = () => {
	return (
		<AdminBase>
			<div className="newproduct">
				<div className="container">
					<Form />
				</div>
			</div>
		</AdminBase>
	);
};

export default UpdateProduct;
