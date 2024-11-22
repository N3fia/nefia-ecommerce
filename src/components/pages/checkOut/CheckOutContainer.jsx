import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConf";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import CheckOutPres from "./CheckOutPres";

const CheckOutContainer = () => {
	const { cart, cTotalPrc, emptyCart } = useContext(CartContext);

	const [orderId, setOrderId] = useState(null);

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phoneNum: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const total = cTotalPrc();

		const order = {
			buyer: userData,
			items: cart,
			total,
		};

		const orderCollection = collection(db, "orders");
		addDoc(orderCollection, order).then((res) => {
			setOrderId(res.id);
			emptyCart();
		});

		const productCollection = collection(db, "products");
		order.items.forEach((item) => {
			const productDoc = doc(productCollection, item.id);
			updateDoc(productDoc, { stock: item.stock - item.quantity });
		});
	};

	const handleCancel = () => {
		setUserData({
			name: "",
			email: "",
			phoneNum: "",
		});
	};

	return (
		<CheckOutPres
			userData={userData}
			orderId={orderId}
			handleInputChange={handleInputChange}
			handleSubmit={handleSubmit}
			handleCancel={handleCancel}
		/>
	);
};

export default CheckOutContainer;
