import React from 'react';
import './Product.scss';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
	const [ { cart }, dispatch ] = useStateValue();

	const addToCart = () => {
		// dispatch the item into the data layer
		dispatch({
			type: 'ADD_TO_CART',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		});
	};

	return (
		<div className="product">
			<div className="product-info">
				<div>{title}</div>
				<div className="product-price">
					<small>$</small>
					<strong>{price}</strong>
				</div>
				<div className="product-rating">
					{Array(rating).fill().map((_, i) => (
						<p>
							<span role="img" aria-labelledby="star">
								⭐
							</span>
						</p>
					))}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={addToCart}>Add to Cart</button>
		</div>
	);
}

export default Product;
