import './App.css';
import { sampleProducts } from './data.tsx';

function App() {

	return (
		<>
			<div>
				<header>Gravi</header>
				<main>
					<ul>
						{sampleProducts.map((product) => (
							<li key={product.slug}>
								<img src={product.image} alt={product.name} className='product-image'/>
								<h2>{product.name}</h2>
								<p>${product.price}</p>
							</li>
						))}
					</ul>
				</main>
				<footer>All rights reserved.</footer>
			</div>
		</>
	);
}

export default App;
