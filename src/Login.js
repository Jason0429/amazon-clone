import React, { useState } from 'react';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// Successful creation of new user with email and password
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>

			<div className="login-container">
				<h1>Sign In</h1>

				<form action="">
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="login-signin-btn" onClick={signIn}>
						Sign In
					</button>
				</form>

				<p>
					By signing in you agree to the AMAZON CLONE conditions and
					Use & Sale. Please see our Privacy Notice, our Cookies
					Notice and our Interest-Based Ads Notice.
				</p>

				<button className="login-register-btn" onClick={register}>
					Create Account
				</button>
			</div>
		</div>
	);
}

export default Login;
