import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../assets/sass/auth/createaccount.scss';
import Base from '../core/user/Base';
import { createAccount, isAuthenticated } from './helper/apicall';
import cogoToast from 'cogo-toast';

const Createaccount = () => {
	const [ details, setDetails ] = useState({
		email: 'imajmin@gmail.com',
		password: 'Imajmin2014@#$'
	});

	const [ error, setError ] = useState('');

	// destructering from state
	const { email, password } = details;

	// trigger the function when user type
	const handleChange = (name) => (event) => {
		setDetails({ ...details, [name]: event.target.value });
	};

	// triger the function when user submit
	const handleSubmit = (event) => {
		event.preventDefault();

		createAccount(email, password)
			.then((response) => {
				if (response.error) {
					cogoToast.error(response.error, { position: 'top-right' });
				} else if (response.user) {
					cogoToast.loading('Creating your account...').then(() => {
						cogoToast.success('Your account was created successfully...', { position: 'top-right' });
					});

					setDetails({
						...details,
						email: '',
						password: ''
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (isAuthenticated()) {
		return <Redirect to="/admin" />;
	}

	return (
		<Base>
			<div className="createaccount">
				<form onSubmit={handleSubmit}>
					<h3>Crete an account</h3>
					<label htmlFor="email">Email address</label>
					<input type="email" value={email} onChange={handleChange('email')} required />

					<label htmlFor="password">Password</label>
					<input type="password" value={password} onChange={handleChange('password')} required />

					<button>Create account</button>
					<Link to="/loginaccount">Already have an account?</Link>
				</form>
			</div>
		</Base>
	);
};

export default Createaccount;
