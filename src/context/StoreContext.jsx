import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState({}); // Chua cac item trong gio hang

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

    const getTotalfromCart = () => {
        let total = 0;
        for(const itemId in cartItems) {
            let itemInfo = food_list.find((item) => item._id === itemId);
            if(itemInfo) {
                total += itemInfo.price * cartItems[itemId];
            }
        
        }
        return total;
    }

    const contextValue = {
        food_list: food_list,
        cartItems: cartItems,
        setCartItems: setCartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        getTotalfromCart: getTotalfromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider