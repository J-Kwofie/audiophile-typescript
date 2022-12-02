
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button1 } from "../buttons/ButtonStyled";
type buttonProps = {
  categoryName?:string,
  product_id:string
}
export default function Button({categoryName,product_id}:buttonProps) {
    const navigate = useNavigate()
  return (
    <Button1 onClick={()=> navigate(`/product/${categoryName}/${product_id}`)}>see product</Button1>
  )
}
