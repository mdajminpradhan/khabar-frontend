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

// get all categories
export const get_all_categories = () => {
	return axios
		.get('/postcategories')
		.then((response) => {
			return response.data;
		})
		.catch((error) => error);
};

// get category by id
export const get_category_by_id = (cate_id) => {
	return axios
		.get(`/postcategory/${cate_id}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log(error));
};

// update category
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

// deleting category
export const delete_category = (cateid, profileid) => {
	return axios
		.delete(`/postcategory/delete/${cateid}/${profileid}`)
		.then((response) => {
			return response;
		})
		.catch((error) => error);
};
