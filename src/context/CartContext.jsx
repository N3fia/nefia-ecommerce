import { createContext, useState } from "react";
import { toast } from "sonner";

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

	//esta es la que funciona ESTA ANDA
	// const addToCart = (product) => {
	// 	const isInCart = cart.some((e) => e.id === product.id);
	// 	const uCart = isInCart
	// 		? cart.map((e) =>
	// 				e.id === product.id
	// 					? { ...e, quantity: e.quantity + (product.quantity || 0) }
	// 					: e
	// 		  )
	// 		: [...cart, { ...product, quantity: product.quantity || 1 }];

	// 	setCart(uCart);
	// };

	//INTENTO TDE NO AGREGAR AL CARRITO SI EL STOCK MAXIMO DEL PRODUCTO YA ESTA AHI

	const addToCart = (product) => {
		const isInCart = cart.some((e) => e.id === product.id);
		const uCart = isInCart
			? cart.map((e) => {
					if (e.id === product.id) {
						if (e.quantity + (product.quantity || 0) > product.stock) {
							toast.error(
								"Can't add any more, available Stock is already in your cart.",
								{ position: "bottom-right" }
							);

							// alert(
							// 	"Can't add any more, available Stock is already in your cart."
							// );
							return e;
						} else {
							toast.success("Added to cart", { position: "bottom-right" });
							return { ...e, quantity: e.quantity + (product.quantity || 0) };
						}
					}
					return e;
			  })
			: [...cart, { ...product, quantity: product.quantity || 1 }];

		setCart(uCart);
	};
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
