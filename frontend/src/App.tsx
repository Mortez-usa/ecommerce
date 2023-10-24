import { Container, Navbar } from 'react-bootstrap';
import { sampleProducts } from './data.tsx';

function App() {
	return (
		<>
			<div className='d-flex flex-column vh-100'>
				<header>
					<Navbar bg='dark' variant='dark' expand='lg'>
						<Container>
							<Navbar.Brand>GRAVI</Navbar.Brand>
						</Container>
						<nav className='nav'>
							<a href='/cart' className='nav-link'>
								Cart
							</a>
							<a href='/Sign-in' className='nav-link'>
								Sign in
							</a>
						</nav>
					</Navbar>
				</header>
				<main>
					<ul>
						{sampleProducts.map((product) => (
							<li key={product.slug}>
								<img
									src={product.image}
									alt={product.name}
									className='product-image'
								/>
								<h2>{product.name}</h2>
								<p>${product.price}</p>
							</li>
						))}
					</ul>
				</main>
				<footer>
					<div className='text-center'>
						All rights reserved.
					</div>
					</footer>
			</div>
		</>
	);
}

export default App;
