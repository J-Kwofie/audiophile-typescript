import React, {useEffect,useState} from 'react'
import ProductSection from './ProductSection'
import {categoryProps} from './types'
import {ProductSectionListStyled} from './ProductSectionListStyled'

function ProductSectionList({categoryName}:categoryProps) {
  const [productsInACategory, setProductsInACategory] = useState([])
  useEffect(()=>{
    fetch(`https://audio-ph.onrender.com/api/vi/product/${categoryName}`)
    .then((res)=> res.json())
    .then((data)=>{setProductsInACategory(data); console.log(data)})
  }, [categoryName])
  return (
    <ProductSectionListStyled>
      {
        productsInACategory.map((productInCategory,index)=><ProductSection categoryName={categoryName} key={index} style={index} productInCategory={productInCategory}/>)
      }
    </ProductSectionListStyled>
  )
}

export default ProductSectionList