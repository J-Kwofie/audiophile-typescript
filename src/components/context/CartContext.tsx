import { createContext, useContext, useState } from "react";

type cartContextProviderProps = {
    children : React.ReactNode
}
const CartContext = createContext([] as any);

export const CartProvider = ({ children }:cartContextProviderProps) => {
    const [cart, setCart] = useState([] as any);
    const [numberOfProductAddedToCart, setNumberOfProductAddedToCart] = useState(1 as number)
    return (
      <CartContext.Provider
        value={{
            addToCart:(slug:string)=>{
                //check if a  product is already added to cart
                let carts = cart.findIndex((item:any) => item['slug'] ===slug);
                if(carts===-1){
                  setNumberOfProductAddedToCart(numberOfProductAddedToCart+1)
                }else{
                console.log(carts)
                const items = [...cart]
                items[carts].numberOfProductAddedToCart =  items[carts].numberOfProductAddedToCart+1;
                setNumberOfProductAddedToCart(items[carts].numberOfProductAddedToCart)
                setCart([...items])
                }

            },
            subFromCart:(slug:string)=>{
                //check if a  product is already added to cart
                let carts = cart.findIndex((item:any) => item['slug'] ===slug);
                if(carts===-1){
                  if(numberOfProductAddedToCart>1){
                    setNumberOfProductAddedToCart(numberOfProductAddedToCart-1)
                  }
                }else{
                console.log(carts)
                const items = [...cart]
                if(items[carts].numberOfProductAddedToCart>1){
                    items[carts].numberOfProductAddedToCart =  items[carts].numberOfProductAddedToCart-1;
                    setNumberOfProductAddedToCart(items[carts].numberOfProductAddedToCart)
                }
                setCart([...items])
                }
            },
            numberOfProductAddedToCart,
            setNumberOfProductAddedToCart:setNumberOfProductAddedToCart,
            cart,
            setCart,
            addToCartHandler: (numberOfProductAddedToCart:number,productDetails:any[])=> {
            let pro = {...productDetails[0],numberOfProductAddedToCart:numberOfProductAddedToCart}
            console.log(numberOfProductAddedToCart)

            //check if a  product is already added to cart
            let carts = cart.findIndex((item :any) => item.slug === productDetails[0]['slug']);
            if(carts===-1){
            setCart([...cart, pro])
            localStorage.setItem("cart", JSON.stringify([...cart, pro]));

            }else{
            console.log(carts, "mex")
            const items: any[] = [...cart]
            items[carts] = pro
            setCart([...items])
            localStorage.setItem("cart", JSON.stringify([...items]));

            }
         },
         removeCart :()=>{
            setCart([])
            localStorage.clear()
         }
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };

  export const useCart = () => useContext(CartContext);