import React from 'react'
import Main from '../components/homeComponents/Main'
import HomeProductsSection from '../components/homeComponents/HomeProductsSection'
import CategorySection from '../components/CategorySection'
export default function Home() {
	return (
		<>
			<Main />
			<CategorySection />
			<HomeProductsSection />
		</>
	)
}