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


// verify token

export const verifyToken = () => {
	if(localStorage.getItem('jwt')){

		try {
			var token = JSON.parse(localStorage.getItem('jwt'));
			return jwt.verify(token.token, process.env.REACT_APP_JWTSECRET)

		} catch (error) {
			if(error){
				return false;
			}
		}

	}
}


// checking the user is authenticated or not
export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}

	if (localStorage.getItem('jwt')) {
		try {
			return JSON.parse(localStorage.getItem('jwt'));
		} catch (error) {
			return false;
		}
	} else {
		return false;
	}
};


// Log out calling function
export const logoutAccount = (next) => {
	if(typeof window == 'undefined'){
		return false;
	}

	if(localStorage.getItem('jwt')){
		localStorage.removeItem('jwt')
	}
	
	axios.get('/logoutaccount');
	
	next();
}