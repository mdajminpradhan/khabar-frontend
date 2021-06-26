import axios from 'axios';
import { isAuthenticated } from '../../auth/helper/apicall';

const { user } = isAuthenticated();

// creating post category
export const newCategory = (cate, userId) => {
	return axios
		.post(`/postcategory/create/${userId}`, {
			title: cate
		})
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
export const update_category = (cate, cate_id, profile_id) => {
	return axios
		.put(`postcategory/update/${cate_id}/${profile_id}`, {
			title: cate
		})
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
export const newProductCategory = (cate, userId) => {
	return axios
		.post(`/category/create/${userId}`, {
			title: cate
		})
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
export const update_product_category = (cate, cate_id, profile_id) => {
	return axios
		.put(`category/update/${cate_id}/${profile_id}`, {
			title: cate
		})
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
		.get('/posts')
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
