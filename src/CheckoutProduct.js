import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
	const [ { cart }, dispatch ] = useStateValue();

	const removeFromCart = () => {
		// remove the item from cart
		dispatch({
			type: 'REMOVE_FROM_CART',
			id: id
		});
	};

	return (
		<div className="checkout-product">
			<img className="checkout-product-image" src={image} alt={title} />

			<div className="checkout-product-info">
				<div className="checkout-product-title">{title}</div>
				<div className="checkout-product-price">
					<small>$</small>
					<strong>{price}</strong>
				</div>
				<div className="checkout-product-rating">
					{Array(rating).fill().map((_, i) => (
						<div>
							<span role="img" aria-labelledby="star">
								⭐
							</span>
						</div>
					))}
				</div>
				<button onClick={removeFromCart}>Remove from Cart</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
