import { Product } from "./types/Product";


export const sampleProducts: Product[] = [
	{
		name: 'Gravi slim Tshirt',
		slug: 'Gravi-Tshirt',
		image: '../Images/01.jpg',
		category: 'A',
		brand: 'Gravi',
		price: 100,
		countInStock: 21,
		description: 'high quality product',
		rating: 4.1,
		numReviews: 43,
	},
	{
		name: 'Gravi fit Tshirt',
		slug: 'Gravi-fit-Tshirt',
		image: '../Images/02.jpg',
		category: 'A',
		brand: 'Gravi',
		price: 100,
		countInStock: 20,
		description: 'high quality product',
		rating: 3.5,
		numReviews: 42,
	},
	{
		name: 'Gravi slim-fit Tshirt',
		slug: 'Gravi-slimfit-Tshirt',
		image: '../Images/03.jpg',
		category: 'A',
		brand: 'Gravi',
		price: 100,
		countInStock: 0,
		description: 'high quality product',
		rating: 4.0,
		numReviews: 43,
	},
];