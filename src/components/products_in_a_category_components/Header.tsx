import React from 'react'
import { HeaderStyled } from './HeaderStyled'
import {categoryProps} from './types'


export default function Header({categoryName}:categoryProps) {
  return (
    <HeaderStyled>
        <h1>{categoryName}</h1>
    </HeaderStyled>
  )
}
