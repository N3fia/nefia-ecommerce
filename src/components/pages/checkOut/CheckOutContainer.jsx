import { Button, Input } from "@mui/material";
import { useState } from "react";

const CheckOutContainer = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		phoneNum: "",
	});

	const fSubmit = (eve) => {
		eve.preventDefault();

		console.log(userData);
	};

	const captUserData = (eve) => {
		const { name, value } = eve.target;
		setUserData({ ...userData, [name]: value });
	};
	return (
		<div>
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
		</div>
	);
};

export default CheckOutContainer;
