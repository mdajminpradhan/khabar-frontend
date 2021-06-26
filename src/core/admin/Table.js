import React, { useEffect, useState } from 'react';
import '../../assets/sass/admin/components/table.scss';
import Image from '../../assets/images/blog/recentpost/1.jpg';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Table({ data, image, deleteData }) {
	
	// post count number
	let count = 0;

	return (
		<div className="table">
			<div className="table__header">
				<div>No.</div>
				<div>Thumbnail</div>
				<div>Title</div>
				<div>Category</div>
				<div>Comments</div>
				<div>Action</div>
			</div>
			<div className="table__body">
				{data.map((info, index) => (
					<div className="tablerow" key={index}>
						<div>{count++}</div>
						<div>
							<img src={image} alt="thumbnail" />
						</div>
						<div className="title">{info.title}</div>
						<div>Category</div>
						<div className="comment">3</div>
						<div className="actions">
							<Link to={`/admin/post/update/${info._id}`}>
								<HiPencil />
							</Link>
							<AiOutlineDelete
								onClick={() => {
									deleteData(info._id);
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Table;
