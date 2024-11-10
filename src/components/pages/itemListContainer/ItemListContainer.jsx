import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import CircularWithValueLabel from "../../common/circularWithValueLabel/CircularWithValueLabel";
import "./itemListContainer.css";

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
		// <div>
		// 	<h2>All Products</h2>

		// 	{items.length === 0 ? (
		// 		<Box>
		// 			<CircularWithValueLabel />
		// 		</Box>
		// 	) : (
		// 		<ItemList items={items} />
		// 	)}
		// </div>

		// <Box
		// 	sx={{
		// 		display: "flex",
		// 		flexDirection: "column",
		// 		alignItems: "center",
		// 		justifyContent: "center",
		// 		minHeight: "100vh",
		// 	}}
		// >
		// 	<Typography variant="h2" gutterBottom>
		// 		All Products
		// 	</Typography>

		// 	{items.length === 0 ? (
		// 		<CircularWithValueLabel />
		// 	) : (
		// 		<ItemList items={items} />
		// 	)}
		// </Box>
		<div className="item-list-container">
			<Typography
				variant="h2"
				gutterBottom
				className="item-list-heading"
				sx={{ marginTop: "32px" }}
			>
				All Products
			</Typography>

			{items.length === 0 ? (
				<Box className="item-list-loader">
					<CircularWithValueLabel />
				</Box>
			) : (
				<ItemList items={items} />
			)}
		</div>
	);
};
