import { createContext, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		let updatedCart = [...cart];
		const existingProductIndex = cart.findIndex((e) => e.id === product.id);

		if (existingProductIndex !== -1) {
			const existingProduct = cart[existingProductIndex];
			const newQuantity = existingProduct.quantity + (product.quantity || 0);

			if (newQuantity > product.stock) {
				toast.error(
					"Can't add any more, available Stock is already in your cart.",
					{
						position: "bottom-right",
					}
				);
				return;
			} else {
				updatedCart[existingProductIndex] = {
					...existingProduct,
					quantity: newQuantity,
				};
				toast.success("Added to cart", { position: "bottom-right" });
			}
		} else {
			updatedCart.push({ ...product, quantity: product.quantity || 1 });
			toast.success("Added to cart", { position: "bottom-right" });
		}

		setCart(updatedCart);
	};

	const emptyCart = () => {
		setCart([]);
	};

	const removeFromCart = (id) => {
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
