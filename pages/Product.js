import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/products/Header';
import ProductSectionList from '../components/products/ProductSectionList';
export default function Product() {
	const params = useParams()
	const category  = params.category;
	React.useEffect(()=>{
		window.scrollTo(0,0)
	})
	return (
		<div>
			<Header category={category} />
			<ProductSectionList categoryName={category} />
		</div>
	)
}