"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '@/types';

interface CartItem extends Course {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (course: Course) => void;
    removeFromCart: (courseId: number) => void;
    clearCart: () => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        // Load cart from localStorage if needed (client-side only)
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (course: Course) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === course.id);
            if (existing) {
                return prev; // Usually 1 per course for digital products
            }
            return [...prev, { ...course, quantity: 1 }];
        });
    };

    const removeFromCart = (courseId: number) => {
        setCart((prev) => prev.filter((item) => item.id !== courseId));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((acc, item) => acc + item.attributes.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
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
