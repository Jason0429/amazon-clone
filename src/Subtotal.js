import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

function Subtotal() {
	const [ { cart }, dispatch ] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({cart.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal-gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
