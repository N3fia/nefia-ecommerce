import { Button, Input } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConf";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const CheckOutContainer = () => {
	const { cart, cTotalPrc, emptyCart } = useContext(CartContext);

	const [orderId, setOrderId] = useState(null);

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phoneNum: "",
	});

	const fSubmit = (eve) => {
		eve.preventDefault();
		const toPay = cTotalPrc();

		const order = {
			buyer: userData,
			items: cart,
			total: toPay,
		};
		let refColl = collection(db, "orders");
		addDoc(refColl, order).then((res) => {
			setOrderId(res.id);
			emptyCart();
		});

		let refColP = collection(db, "products");
		// updateDoc(refDocP , {})

		order.items.forEach((item) => {
			let refDocP = doc(refColP, item.id);
			updateDoc(refDocP, { stock: item.stock - item.quantity });
			//ver de ocultar el counter cuando el stock es 0 en item detail
		});
	};

	const captUserData = (eve) => {
		const { name, value } = eve.target;
		setUserData({ ...userData, [name]: value });
	};
	return (
		// agregar un loader mientras se salva la orden
		<div>
			{orderId ? (
				<h2>
					Thanks for shopping with us! Your order {orderId} has been submitted
				</h2>
			) : (
				<form onSubmit={fSubmit}>
					<Input
						type="text"
						placeholder="Jhon Doe"
						name="name"
						onChange={captUserData}
					></Input>
					<Input
						type="text"
						placeholder="email@email.com"
						name="email"
						onChange={captUserData}
					></Input>
					<Input
						type="text"
						placeholder="+123456789"
						name="phoneNum"
						onChange={captUserData}
					></Input>
					<Button type="submit">Comprar</Button>
					<Button>Cancelar</Button>
					{/* en mui tengo que definir el type para que el boton haga submit de la form. si no le agrego nada lo toma como un boton comun y no tiene efecto  */}
				</form>
			)}
		</div>
	);
};

export default CheckOutContainer;
