
import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import {ProductDetailsStyle} from '../components/ProductStyledDetails'
import {AddButton,SubButton,NumberButton} from '../components/ButtonStyledProduct'
import {Button1} from '../components/buttons/ButtonStyled'
import {GalleryStyled} from '../components/GalleryStyled'
import ProductSection from '../components/products_in_a_category_components/ProductSection'
import CategorySection from '../components/CategorySection'

import {useCart} from '../components/context/CartContext'

function ProductDetails() {
  const params = useParams()
	const category  = params.category;
  const product_id = params.product_id;
  const [productDetails, setProductDetails] = useState([] as any)

  const {cart,addToCartHandler, numberOfProductAddedToCart, setNumberOfProductAddedToCart,subFromCart,addToCart} = useCart()
 
  

  useEffect(()=>{
    fetch(`https://audio-ph.onrender.com/api/vi/product/${category}/${product_id}`)
    .then((res)=>res.json())
    .then((data)=>{
      let newProductDetails = [...data];
      const localStorageData = window.localStorage.getItem('cart');
        console.log(localStorageData)
        if( localStorageData !== null ){
          let localStorageDataParsed = JSON.parse(localStorageData);
          let findData =  localStorageDataParsed.find((item:any) => item['slug'] === newProductDetails[0]['slug'])
          if(findData){
            setNumberOfProductAddedToCart(findData['numberOfProductAddedToCart'])
          }else{
            setNumberOfProductAddedToCart(1)
          };
        }else{
          setNumberOfProductAddedToCart(1)
        };
      setProductDetails(newProductDetails); console.log(data[2])})
    .catch((err)=>console.log(err));
    window.scrollTo(0,0)
  },[category,product_id,setNumberOfProductAddedToCart])
  useEffect(()=>{
    console.log(cart,"mex")
  },[cart])
  return (

    productDetails.length > 0 ?
    <ProductDetailsStyle  by_image={[productDetails[0]['mobile_image_url'],productDetails[0]['tablet_image_url'],productDetails[0]['desktop_image_url']]}>
      <div className='product-details'>
        <section>
        {productDetails[0]['new'] === true &&  <h4 className='new'>new product</h4>}
          <h1>{productDetails[0]['name']}</h1>
          <p>{productDetails[0]['description']}</p>
          <strong>{`$  ${productDetails[0]['price']}`}</strong>
          <div className="cart">
          <div className="cartSubAdd" >
              <SubButton onClick={()=>subFromCart(productDetails[0]['slug'])}>-</SubButton>
              <NumberButton>{numberOfProductAddedToCart}</NumberButton>
              <AddButton onClick={()=>addToCart(productDetails[0]['slug'])}>+</AddButton>
            </div>
            <Button1 onClick={()=>{addToCartHandler(numberOfProductAddedToCart,productDetails);}}> {cart.find((item:any)=>item.slug===productDetails[0]['slug'])?"Added to Cart":"Add to Cart"} </Button1>
          </div>
        </section>
      </div>
      <div className='feature-in-box'>
      <section className='features'>
          <h2>features</h2>
          <p>{productDetails[0]['feature'].split('\\n\\n')[0]}</p>
          <p>{productDetails[0]['feature'].split('\\n\\n')[1]}</p>

      </section>
      <section className='other-items'>
        <h2>in the box</h2>
        <ul>
         {
          productDetails[1].map((feature:any,index:number )=>{
           return ( <li key={index}><span>{`${feature.quantity}x`}</span> <span>{feature.item_name}</span></li>)
          })
         }
        </ul>
      </section>
      </div>
       <GalleryStyled gallery={productDetails[2]}>
         {productDetails[2].map((item:any,index:number)=>{
          return <div key={index} className={`gallery${index}`}></div>
         })
        }
      </GalleryStyled> 
      <section className='other-product-items'>
        <h2>you may also like</h2>

      <div className='otherItrms'>
        {
          productDetails[3].map((productInCategory:any,index:number)=><ProductSection categoryName={category} key={index} style={index} productInCategory={productInCategory}/>)
        }
      </div>
      </section>
      <section className='category'>
        <CategorySection />
      </section>
    </ProductDetailsStyle>
      
    :<h1>loading..</h1>
    

  )
}

export default ProductDetails