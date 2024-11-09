import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
	const { cart, emptyCart, removeFromCart, cTotalPrc } =
		useContext(CartContext);

	let cartTotal = cTotalPrc();
	return (
		<div>
			{cart.map((product) => {
				return (
					<div key={product.id}>
						<h2>{product.title}</h2>
						<h3>Qty: {product.quantity}</h3>
						<Button
							onClick={() => {
								removeFromCart(product.id);
							}}
						>
							Remove
						</Button>
					</div>
					//crear una tarjeta componente especifica para el carritoo y agregar un contador para poder sumar o restar cantidades del producto directamente
				);
			})}

			<Button onClick={emptyCart}>Empty Cart</Button>
			{/* solo con llaves, cuando la funcion no espera argumentos, de otra forma hay que usar un call back que se dispare con el onclick (como el remove from cart de arriba) */}
			<h2>Total:{cartTotal} </h2>
			<Link to="/checkout">
				<Button>Checkout</Button>
			</Link>
		</div>
	);
};

export default CartContainer;
