import React from 'react';
import '../../assets/sass/admin/components/table.scss';
import TableRow from './TableRow';

function Table() {
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
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
			</div>
		</div>
	);
}

export default Table;
