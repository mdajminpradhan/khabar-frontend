import React, { useEffect, useState } from 'react';
import '../../assets/sass/admin/components/productform.scss';
// import Image from '../../assets/images/blog/recentpost/1.jpg';
import { IoIosClose } from 'react-icons/io';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { isAuthenticated } from '../../auth/helper/apicall';
import cogoToast from 'cogo-toast';
import { getDataPicture } from '../../admin/helper/apicall';

function Form({ fetchedCategories, sendDataToPapa, getCreateAction, dataById = 'undefined' }) {
	const [ details, setDetails ] = useState({
		title: '',
		shortdescription: 'post description',
		longdescription: 'post description',
		top: 'false',
		price: '',
		specialprice: '',
		image: ''
	});
	const [ categories, setCategories ] = useState([]);

	const [ fetchImage, setFetchImage ] = useState();

	// destrucring state
	const { title, shortdescription, longdescription, top, price, specialprice, image } = details;

	// getting logged in user data
	const { user } = isAuthenticated();

	useEffect(
		() => {
			if (dataById !== 'undefined' && Object.keys(dataById).length > 1) {
				setDetails({
					...details,
					title: dataById.title,
					price: dataById.price,
					top: dataById.top
				});

				setCategories(dataById.category);

				getDataPicture('productpicture', dataById._id)
					.then((response) => {
						setFetchImage(response);
					})
					.catch((error) => cogoToast.error(error, { position: 'top-right' }));
			}

			if (dataById !== 'undefined' && Object.keys(dataById).length > 1 && dataById.specialprice) {
				setDetails({
					...details,
					specialprice: dataById.specialprice
				});
			}
		},
		[ dataById ]
	);

	// marking category as checked based on given id from loop
	const checkChecked = (cateid) => {
		if (dataById !== 'undefined' && Object.keys(dataById).length > 1) {
			if (categories.includes(cateid)) {
				return true;
			}
		}
	};

	// handlechange input
	const handleChange = (name) => (event) => {
		const value = name === 'image' ? event.target.files[0] : event.target.value;
		setDetails({ ...details, [name]: value });
	};

	// handling categories
	const handleCategory = (event) => {
		const value = event.target.value;
		if (categories.includes(value)) {
			const filter = categories.filter((cate) => cate !== value);
			setCategories(filter);
		} else {
			setCategories([ ...categories, value ]);
		}
	};

	// handle top
	const handleTop = (event) => {
		setDetails({
			...details,
			top: event.target.checked
		});
	};

	let some = dataById._id;

	// handle submit
	const handleSubmit = (id) => {
		sendDataToPapa(title, categories, shortdescription, longdescription, top, price, specialprice, image, id);
		getCreateAction(true);
	};

	return (
		<div className="form">
			<form action="">
				<div className="form__left">
					<label htmlFor="title">Post title</label>
					<input type="text" id="title" value={title} onChange={handleChange('title')} required />
					<label>Post description</label>
					<CKEditor
						editor={ClassicEditor}
						data={dataById ? dataById.shortdescription : ''}
						onChange={(event, editor) => {
							const data = editor.getData();
							// console.log({ event, editor, data });
							setDetails({ ...details, shortdescription: data });
						}}
					/>
					<label className="longdesc">Post long description</label>
					<CKEditor
						editor={ClassicEditor}
						data={dataById ? dataById.longdescription : ''}
						onChange={(event, editor) => {
							const data = editor.getData();
							// console.log({ event, editor, data });
							setDetails({ ...details, longdescription: data });
						}}
					/>
				</div>
				<div className="form__right">
					<div className="publish">
						<div>
							<span className="publishContext">Publish your data right away</span>
						</div>
						<div className="devider" />

						<div className="publishh">
							<span className="primary" onClick={() => handleSubmit(dataById._id)}>
								{dataById !== 'undefined' ? 'Update' : 'Publish'}
							</span>
						</div>
					</div>
					<div className="categories">
						<h5>Categories</h5>

						{fetchedCategories.map((cate, index) => (
							<div className="category" key={index}>
								<input
									type="checkbox"
									value={cate._id}
									onChange={handleCategory}
									checked={checkChecked(cate._id)}
									id={cate.title}
								/>
								<label htmlFor={cate.title}>{cate.title}</label>
							</div>
						))}
					</div>

					<div className="topproduct">
						<h5>Top product</h5>

						<div className="category">
							<input
								type="checkbox"
								value={top}
								onChange={handleTop}
								id="featured"
								checked={top == true ? 'true' : ''}
							/>
							<label htmlFor="featured">Featured</label>
						</div>
					</div>
					<div className="price">
						<h5>Top product</h5>

						<div className="pricesec">
							<label htmlFor="price">Regular price</label>
							<input type="number" value={price} onChange={handleChange('price')} id="price" />
						</div>

						<div className="pricesec">
							<label htmlFor="specialprice">Special price</label>
							<input
								type="number"
								value={specialprice}
								onChange={handleChange('specialprice')}
								id="specialprice"
							/>
						</div>
					</div>
					<div className="thumbnail">
						<h5>Thumbnail</h5>

						<input type="file" onChange={handleChange('image')} />
						{image ? (
							<img src={URL.createObjectURL(image)} alt="thumbnail" />
						) : dataById != 'undefined' ? (
							<img src={fetchImage} alt="" />
						) : (
							''
						)}
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
