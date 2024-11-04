import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
	const { cart, emptyCart, removeFromCart } = useContext(CartContext);
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
					//crear una tarjeta componente especifica para el carritoo
				);
			})}

			<Button onClick={emptyCart}>Empty Cart</Button>
			{/* solo con llaves, cuando la funcion no espera argumentos, de otra forma hay que usar un call back que se dispare con el onclick (como el remove from cart de arriba) */}
			<Link to="/checkout">
				<Button>Checkout</Button>
			</Link>
		</div>
	);
};

export default CartContainer;
