import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import CircularWithValueLabel from "../../common/circularWithValueLabel/CircularWithValueLabel";
import "./itemListContainer.css";
import { db } from "../../../firebaseConf";
import { collection, getDocs, query, where } from "firebase/firestore";
// import { products } from "../../../products";

export const ItemListContainer = () => {
	const { name } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		const prodColl = collection(db, "products");
		let docsRef = prodColl;
		if (name) {
			docsRef = query(prodColl, where("category", "==", name));
		}
		getDocs(docsRef).then((res) => {
			let legibleArr = res.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
				};
			});

			setItems(legibleArr);
		});

		// const catName = products.filter(
		// 	(producto) => producto.category === category
		// );
		// const getProducts = new Promise((resolve) => {
		// 	resolve(category ? catName : products);
		// });
		// getProducts.then((res) => {
		// 	setTimeout(() => {
		// 		setItems(res);
		// 	}, 2000);
		// });
	}, [name]);

	// if (items.length === 0) {
	// 	return <h1>loading...</h1>;
	// }

	// const funcionParaAgregar = () => {
	// 	const productsCollection = collection(db, "products");
	// 	products.forEach((product) => {
	// 		addDoc(productsCollection, product);
	// 	});
	// };

	if (items.length === 0) {
		return (
			<Box className="item-list-loader">
				<CircularWithValueLabel />
			</Box>
		);
	}
	return (
		<div className="item-list-container">
			<Typography
				variant="h2"
				gutterBottom
				className="item-list-heading"
				sx={{ marginTop: "32px" }}
			>
				All Products
			</Typography>

			<ItemList items={items} />

			{/* <button onClick={funcionParaAgregar}>cargar prod</button> */}
		</div>
	);
};
