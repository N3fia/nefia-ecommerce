import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
	const { category } = useParams();
	const [items, setItems] = useState([]);
	useEffect(() => {
		const catName = products.filter(
			(producto) => producto.category === category
		);

		const getProducts = new Promise((resolve, reject) => {
			resolve(category ? catName : products);
		});
		getProducts.then((res) => {
			setItems(res);
		});
	}, [category]);
	return <ItemList items={items} />;
};
