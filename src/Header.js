import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
	const [{ cart, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Amazon"
					className="header-logo"
				/>
			</Link>

			<div className="header-search">
				<input type="text" className="header-search-input" />
				<SearchIcon className="header-search-icon" />
			</div>

			<div className="header-nav">
				{/* If user not logged in, then go to /login */}
				<Link to={!user && '/login'}>
					<div
						onClick={handleAuthentication}
						className="header-option">
						<span className="header-option-lineOne">
							Hello Guest
						</span>
						<span className="header-option-lineTwo">
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>

				<div className="header-option">
					<span className="header-option-lineOne">Returns</span>
					<span className="header-option-lineTwo">& Orders</span>
				</div>

				<div className="header-option">
					<span className="header-option-lineOne">Your</span>
					<span className="header-option-lineTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header-option-basket">
						<ShoppingCartIcon />
						<span className="header-option-lineTwo header-basket-count">
							{cart?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
