import React, { useEffect, useRef, useState } from 'react';
import '../../assets/sass/admin/components/postform.scss';
import Image from '../../assets/images/blog/recentpost/1.jpg';
import { IoIosClose } from 'react-icons/io';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { isAuthenticated } from '../../auth/helper/apicall';
import cogoToast from 'cogo-toast';

function Form({ fetchedCategories, sendDataToPapa, getCreatePostAction, dataById = 'undefined' }) {
	const [ details, setDetails ] = useState({
		title: '',
		description: 'post description',
		tag: '',
		image: ''
	});
	const [ categories, setCategories ] = useState([]);
	const inputCheck = useRef();

	// destrucring state
	const { title, description, tag, image } = details;

	// getting logged in user data
	const { user } = isAuthenticated();

	useEffect(
		() => {
			if (dataById !== 'undefined' && Object.keys(dataById).length > 1) {
				setDetails({
					...details,
					title: dataById.title
				});

				setTags(dataById.tags);
				setCategories(dataById.category);
			}
		},
		[ dataById ]
	);

	const [ tags, setTags ] = useState([]);

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

	// handlechange tag
	const handleChangeTag = (event) => {
		setDetails({ ...details, tag: event.target.value });
	};

	// creating tag
	const handleTag = (event) => {
		if (event.key === 'Enter') {
			setTags([ ...tags, tag ]);
			setDetails({ ...details, tag: '' });
		}
	};

	// removing tags
	const removeTag = (tagindex) => {
		setTags(tags.filter((tag, index) => index !== tagindex));
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

	// let userid = user._id;

	// handle submit
	const handleSubmit = () => {
		sendDataToPapa(title, categories, description, tags, image);
		getCreatePostAction(true);
	};

	return (
		<div className="form">
			<form action="">
				<div className="form__left">
					<label htmlFor="title">Post title</label>
					<input type="text" id="title" value={title} onChange={handleChange('title')} required />
					<label htmlFor="description">Post description</label>
					<CKEditor
						editor={ClassicEditor}
						data={dataById ? dataById.description : ''}
						onChange={(event, editor) => {
							const data = editor.getData();
							// console.log({ event, editor, data });
							setDetails({ ...details, description: data });
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
							<span className="primary" onClick={handleSubmit}>
								{dataById !== 'undefined' ? 'Update' : 'Publish'}
							</span>
						</div>
					</div>
					<div className="categories">
						<h5>Categories</h5>

						{fetchedCategories.map((cate, index) => (
							<div className="category" key={index}>
								<input
									ref={inputCheck}
									type="checkbox"
									value={cate._id}
									onChange={handleCategory}
									checked={checkChecked(cate._id)}
									name=""
									id="catone"
								/>
								<label htmlFor="catone">{cate.title}</label>
							</div>
						))}
					</div>
					<div className="tagss">
						<h5>Tags</h5>

						<ul>
							{tags.map((tag, index) => (
								<li key={index}>
									<div>
										<span>{tag}</span>
										<IoIosClose onClick={() => removeTag(index)} />
									</div>
								</li>
							))}
						</ul>
						<div className="taginput">
							<input
								type="text"
								value={tag}
								onChange={handleChangeTag}
								onKeyPress={handleTag}
								placeholder="Enter your tags"
								required
							/>
						</div>
					</div>
					<div className="thumbnail">
						<h5>Thumbnail</h5>

						<input type="file" onChange={handleChange('image')} />
						{image ? <img src={URL.createObjectURL(image)} alt="thumbnail" /> : <img src={dataById.picture} alt="Post thumbnail" />}
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
