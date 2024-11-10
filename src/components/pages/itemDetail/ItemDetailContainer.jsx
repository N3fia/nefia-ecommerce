import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
// import { toast } from "sonner";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState({});
	const { addToCart, pTotalQty } = useContext(CartContext);
	let pQtyCart = pTotalQty(id);

	useEffect(() => {
		let productSelected = products.find((producto) => producto.id === id);
		// console.log(productSelected);
		setItem(productSelected);
	}, [id]);

	const onAdd = (qty) => {
		let obj = { ...item, quantity: qty };
		addToCart(obj);
		// toast.success("Added to cart", { position: "bottom-right" });
		// console.log(obj);
	};
	return <ItemDetail item={item} onAdd={onAdd} pQtyCart={pQtyCart} />;
};

export default ItemDetailContainer;
