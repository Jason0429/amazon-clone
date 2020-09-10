import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// haha

		// Once app loads, this listener is attached
		auth.onAuthStateChanged((authUser) => {
			console.log('THE USER IS >>> ', authUser);

			if (authUser) {
				// User was/just logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				});
			} else {
				// User is logged out
				dispatch({
					type: 'SET_USER',
					user: null
				});
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<div className="App">
				{/* If a component always shows, you can put it outside <Switch> */}
				<Header />

				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>

					{/* Make sure root directory always at bottom */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
