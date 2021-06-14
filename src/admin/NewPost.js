import React from 'react';
import '../assets/sass/admin/pages/newpost.scss';
import AdminBase from '../core/admin/AdminBase';
import Form from '../core/admin/Form';
import EditorJS from '@editorjs/editorjs';

const NewPost = () => {
	return (
		<AdminBase>
			<div className="newpost">
				<div className="container">
					<Form />
				</div>
			</div>
		</AdminBase>
	);
};

export default NewPost;
