import { Row, Col } from 'react-bootstrap';
import LoadingBox from '../components/LoadingBox.tsx';
import MessageBox from '../components/MessageBox.tsx';
import ProductItem from '../components/ProductItem.tsx';
import { Helmet } from 'react-helmet-async';
import { useGetProductsQuery } from '../hooks/productHooks.ts';
import { ApiError } from '../types/ApiError.ts';
import { getError } from '../utils'


export default function HomePage() {

	// const { featuredProducts, latestProducts } = products
	const { data: products, isLoading, error } = useGetProductsQuery()
	return isLoading ? (
		<LoadingBox />
	) : error ? (
		<MessageBox variant='danger'>{getError(error as ApiError)}</MessageBox>
	) : (
		<Row>
			<Helmet>
				<title>Gravi</title>
			</Helmet>
			{products!.map((product) => (
				<Col key={product.slug} sm={6} md={3} lg={4}>
					<ProductItem product={product} />
				</Col>
			))}
		</Row>
	);
}
