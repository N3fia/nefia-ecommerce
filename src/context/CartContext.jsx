import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	// const addToCart = (product) => {
	// 	let isInCart = cart.some((e) => e.id === product.id);
	// 	if (isInCart) {
	// 		console.log("se ejecuta el if");
	// 		let nArray = cart.map((e) => {
	// 			if (e.id === product.id) {
	// 				return { ...e, quantity: e.quantity + product.quantity };
	// 			} else {
	// 				return e;
	// 			}
	// 		});
	// 		setCart(nArray);
	// 	} else {
	// 		console.log("se ejecuta el nuevo array");
	// 		setCart([...cart, product]);
	// 	}
	// };
	const addToCart = (product) => {
		const isInCart = cart.some((e) => e.id === product.id);
		const uCart = isInCart
			? cart.map((e) =>
					e.id === product.id
						? { ...e, quantity: e.quantity + (product.quantity || 0) }
						: e
			  )
			: [...cart, { ...product, quantity: product.quantity || 1 }];

		setCart(uCart);
	};

	//revisar porque con el ternario me devuelve un NaN la qty del carrito
	// const addToCart = (product) => {
	// 	let isInCart = cart.some((e) => e.id === product.id);
	// 	let uCart = isInCart
	// 		? cart.map((e) =>
	// 				e.id === product.id ? { ...e, quantity: e.quantity + product.qty } : e
	// 		  )
	// 		: [...cart, product];
	// 	setCart(uCart);
	// };

	const emptyCart = () => {
		setCart([]);
	};

	const removeFromCart = (id) => {
		// console.log(id);
		let nCart = cart.filter((e) => e.id !== id);
		setCart(nCart);
	};
	const pTotalQty = (id) => {
		const p = cart.find((e) => e.id === id);
		return p ? p.quantity : 0;
	};

	const cTotalPrc = () => {
		let total = cart.reduce((acc, e) => {
			return acc + e.price * e.quantity;
		}, 0);
		return total;
	};

	const cTotalPrd = () => {
		let totalPrd = cart.reduce((acc, e) => {
			return acc + e.quantity;
		}, 0);
		return totalPrd;
	};

	let dataContext = {
		cart,
		addToCart,
		emptyCart,
		removeFromCart,
		pTotalQty,
		cTotalPrc,
		cTotalPrd,
	};
	return (
		<CartContext.Provider value={dataContext}>{children}</CartContext.Provider>
	);
};
