import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../assets/sass/auth/login.scss';
import Base from '../core/user/Base';
import { authenticate, loginAccount, isAuthenticated } from './helper/apicall';
import cogoToast from 'cogo-toast';

const Login = () => {
	const [ details, setDetails ] = useState({
		email: 'imajmin@gmail.com',
		password: 'Imajmin2014@#$',
		didRedirect: false
	});

	const { user } = isAuthenticated();

	// destructering from state
	const { email, password, didRedirect } = details;

	// trigger the function when user type
	const handleChange = (name) => (event) => {
		setDetails({ ...details, [name]: event.target.value });
	};

	// triger the function when user submit
	const handleSubmit = (event) => {
		event.preventDefault();

		loginAccount(email, password)
			.then((response) => {

				if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				} else if (response.user) {
					authenticate(response, () => {
						setDetails({
							...details,
							email: '',
							password: '',
							didRedirect: true
						});
					});

					cogoToast.loading('Loging in to your account...').then(() => {
						// cogoToast.success('Your account was created successfully...', { position: 'top-right' });
					});
				}
			})
			.catch((error) => {
				cogoToast.error(error, { position: 'top-right' });
			});
	};

	const redirectUser = () => {
		if (didRedirect) {
			if (user.role == '1') {
				console.log('yes');
				return <Redirect to="/admin" />;
			} else {
				return <Redirect to="/user/dashboard" />;
			}
		}

		if (isAuthenticated()) {
			return <Redirect to="/admin" />;
		}
	};

	return (
		<Base>
			<div className="login">
				<form onSubmit={handleSubmit}>
					<h3>Login to your account</h3>
					<label htmlFor="email">Email address</label>
					<input type="email" value={email} onChange={handleChange('email')} required />

					<label htmlFor="password">Password</label>
					<input type="password" value={password} onChange={handleChange('password')} required />

					<button>Signin</button>
					{redirectUser()}
					<Link to="/createaccount">Don't have any account?</Link>
				</form>
			</div>
		</Base>
	);
};

export default Login;
