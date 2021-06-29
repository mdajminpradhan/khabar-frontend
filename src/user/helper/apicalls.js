import axios from "axios";


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


