import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export const ItemListContainer = () => {
	const { category } = useParams();
	const [items, setItems] = useState([]);
	useEffect(() => {
		const catName = products.filter(
			(producto) => producto.category === category
		);

		const getProducts = new Promise((resolve) => {
			resolve(category ? catName : products);
		});
		getProducts.then((res) => {
			setTimeout(() => {
				setItems(res);
			}, 2000);
		});
	}, [category]);

	// if (items.length === 0) {
	// 	return <h1>loading...</h1>;
	// }
	return (
		<div>
			<h2>All Products</h2>

			{items.length === 0 ? (
				<Box sx={{ display: "flex" }}>
					<CircularProgress />
				</Box>
			) : (
				<ItemList items={items} />
			)}
		</div>
	);
};
