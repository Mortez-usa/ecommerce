import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

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
					<Container className='mt-3'>
						<Outlet />
					</Container>
				</main>
				<footer>
					<div className='text-center'>All rights reserved.</div>
				</footer>
			</div>
		</>
	);
}

export default App;
