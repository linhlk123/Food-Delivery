import React, { useEffect } from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets';


export const StoreContext = React.createContext();

const StoreContextProvider = ({children}) => {
    
    const [cartItems, setCartItems] = React.useState({}); // Chua cac item trong gio hang

    const addToCart = (itemId) => {
        // Logic them san pham vao gio hang
        if(!cartItems[itemId]) {
            setCartItems(prev => ({...prev, [itemId]: 1}));
        }
        //
        else{
            setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
        }
    }

    const removeFromCart = (itemId) => {
        if(cartItems[itemId] === 0) {
            const updatedCart = { ...cartItems };
            delete updatedCart[itemId];
            setCartItems(updatedCart);
        }
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));

    }

    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list: food_list,
        cartItems: cartItems,
        setCartItems: setCartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider