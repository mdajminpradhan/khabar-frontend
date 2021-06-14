import axios from 'axios';

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
export const get_all_categories = () => {
	return axios
		.get('/postcategories')
		.then((response) => {
			return response.data;
		})
		.catch((error) => error);
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
