import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState({});

	useEffect(() => {
		let productSelected = products.find((producto) => producto.id === id);
		// console.log(productSelected);
		setItem(productSelected);
	}, [id]);
	const onAdd = (qty) => {
		let obj = { ...item, quantity: qty };
		console.log(obj);
	};
	return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
