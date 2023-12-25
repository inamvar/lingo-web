// CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import {cartExists, getCart} from "../common/cartHelper";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartExistsState, setCartExistsState] = useState(cartExists());
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
let sumPrice=0;
    useEffect(() => {
        const updateCartState = () => {
            setCartExistsState(cartExists());
            const cart = getCart();
            setCartCount(cart ? cart.length : 0);
            if (cart!=null){
                cart.forEach((x)=>sumPrice+=x.price[0].amount);
                setCartTotalPrice(sumPrice);
            }

        };

        updateCartState();
    }, []);

    const addToCartCtx = (id, title, price) => {
        // Your existing addToCart logic here
        // Make sure to call updateCartState after modifying the cart
        updateCartState();
    };

    const removeFromCartCtx = (id) => {
        // Your existing removeFromCart logic here
        // Make sure to call updateCartState after modifying the cart
        updateCartState();
    };

    const updateCartState = () => {
        setCartExistsState(cartExists());
        const cart = getCart();
        setCartCount(cart ? cart.length : 0);
        if (cart!=null){
            cart.forEach((x)=>sumPrice+=x.price[0].amount);
            setCartTotalPrice(sumPrice);
        }
    };

    return (
        <CartContext.Provider value={{ cartExists: cartExistsState, cartCount, addToCartCtx, removeFromCartCtx,cartTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
