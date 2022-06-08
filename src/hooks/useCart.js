import AppContext from "../context";
import {useContext} from 'react';


export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const sumPrice = cartItems.reduce((prev, obj) => +prev + +obj.price, 0);


  return { cartItems, setCartItems, sumPrice };
};
