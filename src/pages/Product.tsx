import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/products_in_a_category_components/Header'
import ProductSectionList from '../components/products_in_a_category_components/ProductSectionList'
export default function Product() {
	const params = useParams()
	const category  = params.category;
	React.useEffect(()=>{
		window.scrollTo(0,0)
	})
	return (
		<div>
			<Header categoryName={category} />
			<ProductSectionList  categoryName={category}/>
		</div>
	)
}