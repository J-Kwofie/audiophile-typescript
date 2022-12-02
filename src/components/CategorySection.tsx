import React, {useEffect,useState} from 'react'
import {CategorySectionStyled} from './CategorySectionStyled'
import {useNavigate} from 'react-router-dom'
type categoryProps = {
  category:{
    name:string,
    image:string
  }
}

function Category({category}:categoryProps){
  const navigate = useNavigate();
    const {name,image} = category;
    let ll = {
     img: `../.${image.trim()}`
    } 
    return (
        <div className='category-wrapper'>
            <img src={ll.img} alt='hgh'/>
            <h3>{name}</h3>
            <div onClick={()=>navigate(`/product/${name}`)}>
              <span>Shop</span> 
              <img src={require('../assets/shared/desktop/icon-arrow-right.svg').default} alt="arrow" />
            </div>
        </div>
    )
}
function CategorySection() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch('https://audio-ph.onrender.com/api/vi/category')
      .then((res)=>  res.json())
      .then((data)=> {console.log(data); setCategories(data.data)})
      .catch((error)=>console.log(error))    
      
      return () => {
        
      }
    }, [])
  return (
    categories.length >0 ?
    <CategorySectionStyled>
        {
            categories.map((category,index)=> <Category key={index} category={category}/>)
        }
    </CategorySectionStyled>:<h1>Loading...</h1>
  )
}

export default CategorySection