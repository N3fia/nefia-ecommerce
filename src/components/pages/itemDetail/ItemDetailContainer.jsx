import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

import { db } from "../../../firebaseConf";
import { collection, doc, getDoc } from "firebase/firestore";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [item, setItem] = useState({});
	const { addToCart, pTotalQty } = useContext(CartContext);
	let pQtyCart = pTotalQty(id);

	useEffect(() => {
		const prodColl = collection(db, "products");
		const docRef = doc(prodColl, id);
		getDoc(docRef).then((res) => {
			setItem({ ...res.data(), id: res.id });
		});
	}, [id]);

	const onAdd = (qty) => {
		let obj = { ...item, quantity: qty };
		addToCart(obj);
	};
	return <ItemDetail item={item} onAdd={onAdd} pQtyCart={pQtyCart} />;
};

export default ItemDetailContainer;
