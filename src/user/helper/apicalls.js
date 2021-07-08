import axios from 'axios';

// getting blog posts
export const getBlogPosts = () => {
	return axios
		.post('posts', {
			limit: '12'
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error.response);
			return error.response.data;
		});
};

// get post by d
export const getPostDataById = (postid) => {
	return axios
		.get(`/post/${postid}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error.response.data;
		});
};
