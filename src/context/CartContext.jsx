import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	//agregar al carrito
	const addToCart = (product) => {
		setCart([...cart, product]);
	};
	//eliminar del carrito
	const emptyCart = () => {
		setCart([]);
	};
	//total A Pagar del; carrito
	const removeFromCart = (id) => {
		// console.log(id);
		let newCart = cart.filter((e) => e.id !== id);
		setCart(newCart);
	};
	// limpiar el carrito
	let dataContext = { cart, addToCart, emptyCart, removeFromCart };
	return (
		<CartContext.Provider value={dataContext}>{children}</CartContext.Provider>
	);
};
