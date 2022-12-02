import React, {useState, useEffect} from 'react'
import { StyledCart } from './StyledCart'
import {AddButton,SubButton,NumberButton} from '../../components/ButtonStyledProduct'
import {Button1} from '../../components/buttons/ButtonStyled'
import { useNavigate } from 'react-router';
import {useCart} from '../../components/context/CartContext'
import {useToggleCart} from '../../components/context/CartToggle'

export default function Cart() {
    const [total, setTotal] = useState(0);
    const {cart,setCart,removeCart,addToCart,subFromCart} = useCart()
    const { displayCart, toggleCart} = useToggleCart()

    const navigate =useNavigate()
    useEffect(()=>{
      console.log(window.localStorage.getItem('cart'),"judes")
      
        let sum = 0;
        cart.forEach((item:any)=>{
            sum+=item.price*item.numberOfProductAddedToCart;
            return sum;
        })
        setTotal(sum)

    },[cart])
    useEffect(()=>{
      const f = window.localStorage.getItem('cart');
        console.log(f)
        if( f !== null){
          setCart(JSON.parse(f))
        };
    },[setCart])
    const removeCartHandler =()=>{
      removeCart()
      toggleCart()
    }
   
    const handleToggle = (e:React.MouseEvent)=>{
      let p = e.target as HTMLTextAreaElement;

      if(p.className==='cartDiplay'){
        toggleCart()
      }
    }
  return (
    displayCart && <div className='cartDiplay' onClick={(e)=>handleToggle(e)}>
    <StyledCart className='g'>

      <div className='cart-header'>
        <h1 className='number-of-cart'>{`Cart (${cart.length})`} </h1>
        <div className='remove-button' onClick={removeCartHandler}>Remove all</div>
      </div>
        <ul>
            {cart.map((item:any,index:number)=>{
                return(
                <li key={index}>
                    <div className='cart-name-price-image'>
                        <img className='cart-image' src={`../../assets/cart/image-${item.slug}.jpg`} alt='cart' />
                        <div className='cart-name-price'>
                            <span className='cart-name'>{item.name.replace(item.name.split(' ').pop(), '')}</span>
                            <span>{`$  ${item.price}`}</span>
                        </div>
                    </div>
                    <div className="cartSubAdd" >
                        <SubButton id={item.slug} onClick={()=>subFromCart(item.slug)}>-</SubButton>
                        <NumberButton>{item.numberOfProductAddedToCart}</NumberButton>
                        <AddButton id={item.slug} onClick={()=>addToCart(item.slug)} >+</AddButton>                                                                  
                    </div>
                </li>
                )
                
            })}
        </ul>
      <div className='cart-total-text-value-wrapper'>
        <span className='cart-total-text'>TOTAL</span>
        <span className='cart-total-value'>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(total)}`}</span>
      </div>
      <Button1 className='checkout' 
      >checkout </Button1>

    </StyledCart>
    </div>
  )
}
