import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem } from "../types/cartType";
import type { Product} from "../types/productType";

const STORAGE_KEY = import.meta.env.VITE_CART_STORAGE_KEY 

export const CartContext = createContext<CartContextType>({} as CartContextType);

interface CartContextType {
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  addToCart: (product: Product, quantity?:number) => void;
  removeFromCart: (producId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({children}: CartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {

    const storedCart = localStorage.getItem(STORAGE_KEY);

    if(!storedCart) return [];

    return JSON.parse(storedCart) ;
  });

  useEffect(() => {
    console.log(cartItems); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);


  function addToCart(product: Product, quantity: number = 1) {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);

      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, 
        { ...product,
          quantity: quantity,
          date: new Date().toISOString()
        }
      ];
    });
  }
  function removeFromCart(productId: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  function updateCartItemQuantity(productId: number, quantity: number) {
    if (quantity < 1) return; 

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const cartCount = cartItems.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  return(
    <CartContext.Provider
      value=
      {{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

