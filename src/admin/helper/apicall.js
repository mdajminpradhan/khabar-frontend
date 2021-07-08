import axios from 'axios';
import { isAuthenticated } from '../../auth/helper/apicall';

const { user } = isAuthenticated();

// creating post category
export const newCategory = (title, icon, userId) => {
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('icon', icon);

	return axios
		.post(`/postcategory/create/${userId}`, formdata)
		.then((response) => response)
		.catch((error) => error.response.data);
};

// get  post categories
export const get_all_categories = async () => {
	try {
		const response = await axios.get('/postcategories');
		return response.data;
	} catch (error) {
		return error;
	}
};

// get post category by id
export const get_category_by_id = (cate_id) => {
	return axios
		.get(`/postcategory/${cate_id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log(error));
};

// update post category
export const update_category = (title, icon, cate_id, profile_id) => {
	console.log(title)
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('icon', icon);

	return axios
		.put(`postcategory/update/${cate_id}/${profile_id}`, formdata)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// deleting post category
export const delete_category = (cateid, profileid) => {
	return axios
		.delete(`/postcategory/delete/${cateid}/${profileid}`)
		.then((response) => {
			return response;
		})
		.catch((error) => error);
};

// creating product category
export const newProductCategory = (title, image, icon, userId) => {
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('image', image);
	formdata.append('icon', icon);

	return axios
		.post(`/category/create/${userId}`, formdata)
		.then((response) => response)
		.catch((error) => error.response.data);
};

// get  product categories
export const get_all_product_categories = () => {
	return axios
		.get('/categories')
		.then((response) => {
			return response.data;
		})
		.catch((error) => error);
};

// get post category by id
export const get_product_category_by_id = (cate_id) => {
	return axios
		.get(`/category/${cate_id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log(error));
};

// update post category
export const update_product_category = (title, image, icon, cate_id, profile_id) => {
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('image', image);
	formdata.append('icon', icon);

	return axios
		.put(`category/update/${cate_id}/${profile_id}`, formdata)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// deleting product category
export const delete_product_category = (cateid, profileid) => {
	return axios
		.delete(`/category/delete/${cateid}/${profileid}`)
		.then((response) => {
			return response;
		})
		.catch((error) => error);
};

// creating post
export const createPost = (title, postcategories, description, tags, image) => {
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('category', JSON.stringify(postcategories));
	formdata.append('author', user._id);
	formdata.append('description', description);
	formdata.append('tags', JSON.stringify(tags));
	formdata.append('picture', image);

	return axios
		.post(`/post/create/${user._id}`, formdata)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// get all posts
export const get_all_posts = () => {
	return axios
		.post('/posts')
		.then((response) => {
			return response.data;
		})
		.catch((error) => error);
};

// get post data by id
export const get_post_by_id = async (postid) => {
	try {
		const response = await axios.get(`/post/${postid}`);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

// creating post
export const updatePost = (title, postcategories, description, tags, image, postid) => {
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('category', JSON.stringify(postcategories));
	formdata.append('author', user._id);
	formdata.append('description', description);
	formdata.append('tags', JSON.stringify(tags));
	formdata.append('picture', image);

	return axios
		.put(`/post/update/${postid}/${user._id}`, formdata)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// delete posts
export const delete_post = (postid, profileid) => {
	return axios
		.delete(`/post/delete/${postid}/${profileid}`)
		.then((response) => {
			return response;
		})
		.catch((error) => error);
};

// creating product
export const createProduct = (
	title,
	categories,
	shortdescription,
	longdescription,
	top,
	price,
	specialprice,
	image
) => {
	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('category', JSON.stringify(categories));
	formdata.append('shortdescription', shortdescription);
	formdata.append('longdescription', longdescription);
	formdata.append('top', top);
	formdata.append('price', price);
	if (specialprice) {
		formdata.append('specialprice', specialprice);
	}
	formdata.append('picture', image);

	return axios
		.post(`/product/create/${user._id}`, formdata)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// get all product
export const get_all_products = () => {
	return axios
		.get('/products')
		.then((response) => {
			return response.data;
		})
		.catch((error) => error);
};

// get product data by id
export const get_product_by_id = async (productid) => {
	try {
		const response = await axios.get(`/product/${productid}`);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

// creating product
export const updateProduct = (
	title,
	categories,
	shortdescription,
	longdescription,
	top,
	price,
	specialprice,
	tags,
	image,
	productid
) => {
	console.log(productid);

	const formdata = new FormData();
	formdata.append('title', title);
	formdata.append('category', JSON.stringify(categories));
	formdata.append('shortdescription', shortdescription);
	formdata.append('longdescription', longdescription);
	formdata.append('top', top);
	formdata.append('price', price);
	if (specialprice) {
		formdata.append('specialprice', specialprice);
	}
	formdata.append('tags', JSON.stringify(tags));
	formdata.append('picture', image);

	console.log(title);

	return axios
		.put(`/product/update/${productid}/${user._id}`, formdata)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// delete products
export const delete_product = (productid, profileid) => {
	return axios
		.delete(`/product/delete/${productid}/${profileid}`)
		.then((response) => {
			return response;
		})
		.catch((error) => error);
};

// get data picture
export const getDataPicture = (param, id) => {
	return axios
		.post(`/${param}`, {
			id: id
		})
		.then((response) => {
			return response.data.picture;
		})
		.catch((error) => error);
};
