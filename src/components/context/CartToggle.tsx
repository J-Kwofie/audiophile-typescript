import { createContext, useContext, useState } from "react";

const CartToggle = createContext({} as any);
type cartToggleProviderProps = {
  children : React.ReactNode
}
export const CartTogglerProvider= ({ children }:cartToggleProviderProps) => {
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <CartToggle.Provider
      value={{
        displayCart,
        toggleCart: () => {setDisplayCart(!displayCart)},
      }}
    >
      {children}
    </CartToggle.Provider>
  );
};

export const useToggleCart = () => useContext(CartToggle);