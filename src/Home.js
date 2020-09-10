import React from 'react';
import './Home.scss';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home-row">
					<Product
						id="123456"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="123457"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
				</div>

				<div className="home-row">
					<Product
						id="123455"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="123454"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
					<Product
						id="123453"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
				</div>

				<div className="home-row">
					<Product
						id="123452"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
