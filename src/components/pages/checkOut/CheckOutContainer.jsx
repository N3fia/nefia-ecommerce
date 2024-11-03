import { Button, Input } from "@mui/material";
import { useState } from "react";

const CheckOutContainer = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phoneNum: "",
	});
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [phoneNum, setPhoneNum] = useState("");

	const fSubmit = (eve) => {
		eve.preventDefault();
		// console.log("send form");
		// console.log(name);
		// console.log(email);
		// console.log(phoneNum);
		console.log(userData);
	};
	// const captName = (eve) => {
	// 	// setName(eve.target.value);
	// 	// setUserData(eve.target.value)
	// 	// setUserData({ name: eve.target.value });
	// 	setUserData({ ...userData, name: eve.target.value });
	// };

	// const captEmail = (eve) => {
	// 	// setEmail(eve.target.value);
	// 	setUserData({ ...userData, email: eve.target.value });
	// };
	// const captPhoneNum = (eve) => {
	// 	// setPhoneNum(eve.target.value);
	// 	setUserData({ ...userData, phoneNum: eve.target.value });
	// };
	const captUserData = (eve) => {
		const { name, value } = eve.target;
		setUserData({ ...userData, [name]: value });
	};
	return (
		<div>
			<form onSubmit={fSubmit}>
				{/* <TextField
					required
					id="outlined-required"
					label="Required"
					defaultValue="miemail@email.com"
					name="email"
				/> */}
				<Input
					type="text"
					placeholder="Jhon Doe"
					name="name"
					onChangeCapture={captUserData}
				></Input>
				<Input
					type="text"
					placeholder="email@email.com"
					name="email"
					onChangeCapture={captUserData}
				></Input>
				<Input
					type="text"
					placeholder="+123456789"
					name="phone"
					onChangeCapture={captUserData}
				></Input>
				<Button type="submit">Comprar</Button>
				<Button>Cancelar</Button>
				{/* en mui tengo que definir el type para que el boton haga submit de la form. si no le agrego nada lo toma como un boton comun y no tiene efecto  */}
			</form>
		</div>
	);
};

export default CheckOutContainer;
