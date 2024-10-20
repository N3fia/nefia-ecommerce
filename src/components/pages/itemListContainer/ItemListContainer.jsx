import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
// import { Cards } from "../../common/cards/Car
// import "./itemListContainer.css";

export const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const getProducts = new Promise((resolve, reject) => {
			resolve(products);
		});
		getProducts.then((res) => {
			setItems(res);
		});
	}, []);
	// return <ItemList ite{ms={items} />;
	return <ItemList items={items} />;
};
