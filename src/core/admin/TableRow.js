import React from 'react';
import '../../assets/sass/admin/components/tablerow.scss';
import Image from '../../assets/images/blog/recentpost/1.jpg';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function TableRow() {
	return (
		<div className="tablerow">
			<div>01</div>
			<div>
				<img src={Image} alt="post thumbnail" />
			</div>
			<div className="title">Post title goes here</div>
			<div>Category</div>
			<div className="comment">3</div>
			<div className="actions">
				<Link to="/admin/post/update">
					<HiPencil />
				</Link>
				<AiOutlineDelete />
			</div>
		</div>
	);
}

export default TableRow;
