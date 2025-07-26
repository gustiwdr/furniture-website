"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
	id: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
	category?: string;
	brand?: string;
}

export interface CartContextType {
	items: CartItem[];
	addToCart: (product: Omit<CartItem, "quantity">, quantity?: number) => void;
	removeFromCart: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	getTotalItems: () => number;
	getTotalPrice: () => number;
	getSubtotal: () => number;
	getTax: () => number;
	getShipping: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	// Load cart from localStorage on mount
	useEffect(() => {
		const savedCart = localStorage.getItem("furniture-cart");
		if (savedCart) {
			try {
				setItems(JSON.parse(savedCart));
			} catch (error) {
				console.error("Error loading cart from localStorage:", error);
			}
		}
	}, []);

	// Save cart to localStorage whenever items change
	useEffect(() => {
		localStorage.setItem("furniture-cart", JSON.stringify(items));
	}, [items]);

	const addToCart = (
		product: Omit<CartItem, "quantity">,
		quantity: number = 1
	) => {
		setItems((currentItems) => {
			const existingItem = currentItems.find((item) => item.id === product.id);

			if (existingItem) {
				// Update quantity if item already exists
				return currentItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			} else {
				// Add new item
				const newItems = [...currentItems, { ...product, quantity }];
				return newItems;
			}
		});
	};

	const removeFromCart = (productId: string) => {
		setItems((currentItems) =>
			currentItems.filter((item) => item.id !== productId)
		);
	};

	const updateQuantity = (productId: string, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}

		setItems((currentItems) =>
			currentItems.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			)
		);
	};

	const clearCart = () => {
		setItems([]);
	};

	const getTotalItems = () => {
		return items.reduce((total, item) => total + item.quantity, 0);
	};

	const getSubtotal = () => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const getTax = () => {
		const subtotal = getSubtotal();
		return Math.round(subtotal * 0.11); // 11% tax
	};

	const getShipping = () => {
		const subtotal = getSubtotal();
		// Free shipping for orders above IDR 5,000,000
		return subtotal >= 5000000 ? 0 : 250000;
	};

	const getTotalPrice = () => {
		return getSubtotal() + getTax() + getShipping();
	};

	const contextValue: CartContextType = {
		items,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getTotalItems,
		getTotalPrice,
		getSubtotal,
		getTax,
		getShipping,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};
