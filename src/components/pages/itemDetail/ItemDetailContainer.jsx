import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState({});

	const { addToCart } = useContext(CartContext);

	useEffect(() => {
		let productSelected = products.find((producto) => producto.id === id);
		// console.log(productSelected);
		setItem(productSelected);
	}, [id]);
	const onAdd = (qty) => {
		let obj = { ...item, quantity: qty };
		addToCart(obj);
		// console.log(obj);
	};
	return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
