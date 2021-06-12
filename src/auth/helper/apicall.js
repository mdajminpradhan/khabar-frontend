import axios from 'axios';
import jwt from 'jsonwebtoken';

// createaccount api call
export const createAccount = (email, password) => {
	return axios
		.post('/createaccount', {
			email: email,
			password: password
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// createaccount api call
export const loginAccount = (email, password) => {
	return axios
		.post('/loginaccount', {
			email: email,
			password: password
		})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});
};

// authenticate user
export const authenticate = (token, next) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('jwt', JSON.stringify(token));
		next();
	}
};

// checking the user is authenticated or not
export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}

	if (localStorage.getItem('jwt')) {
		return JSON.parse(localStorage.getItem('jwt'));
	}
};
