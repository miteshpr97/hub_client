import { createContext, useContext, useState } from "react";

// Create the CartContext
const CartContext = createContext();

// CartProvider component that wraps children components
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  

  // Function to add item to the cart
  const addToCart = (course) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find(item => item.id === course.id);
      if (exists) return prevItems;
      return [...prevItems, course];
    });
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Function to clear the cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
