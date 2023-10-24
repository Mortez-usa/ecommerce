import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { sampleProducts } from '../data.tsx';

export default function HomePage() {
  return (
		<div>
			<Row>
				{sampleProducts.map((product) => (
					<Col key={product.slug} sm={6} md={3} lg={4}>
						<img
							src={product.image}
							alt={product.name}
							className='product-image'
						/>
						<h2>{product.name}</h2>
						<p>${product.price}</p>
					</Col>
				))}
			</Row>
		</div>
  );
}
