import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cartContainer.css";

const CartContainer = () => {
	const { cart, emptyCart, removeFromCart, cTotalPrc } =
		useContext(CartContext);

	let cartTotal = cTotalPrc();
	return (
		// <div>
		// 	{cart.map((product) => {
		// 		return (
		// 			<div key={product.id}>
		// 				<h2>{product.title}</h2>
		// 				<h3>Qty: {product.quantity}</h3>
		// 				<Button
		// 					onClick={() => {
		// 						removeFromCart(product.id);
		// 					}}
		// 				>
		// 					Remove
		// 				</Button>
		// 			</div>
		// 			//crear una tarjeta componente especifica para el carritoo y agregar un contador para poder sumar o restar cantidades del producto directamente
		// 		);
		// 	})}

		// 	<Button onClick={emptyCart}>Empty Cart</Button>
		// 	{/* solo con llaves, cuando la funcion no espera argumentos, de otra forma hay que usar un call back que se dispare con el onclick (como el remove from cart de arriba) */}
		// 	<h2>Total:{cartTotal} </h2>
		// 	<Link to="/checkout">
		// 		<Button>Checkout</Button>
		// 	</Link>
		// </div>
		<div className="cart-container">
			<div className="cart-header">
				<Button variant="outlined" onClick={emptyCart}>
					Empty Cart
				</Button>
				<Typography variant="h6">Total: ${cartTotal.toFixed(2)}</Typography>
				<Link to="/checkout" style={{ textDecoration: "none" }}>
					<Button variant="contained">Checkout</Button>
				</Link>
			</div>

			{cart.length > 0 ? (
				cart.map((product) => (
					<div key={product.id} className="cart-product">
						<img src={product.imageUrl} alt={product.title} />
						<div className="cart-product-info">
							<Typography variant="body1">{product.title}</Typography>
							<Typography variant="body2">Qty: {product.quantity}</Typography>
						</div>
						<Button
							variant="outlined"
							color="error"
							onClick={() => removeFromCart(product.id)}
						>
							Remove
						</Button>
					</div>
				))
			) : (
				<Typography variant="h6" className="empty-cart-message">
					Your cart is empty.
				</Typography>
			)}
		</div>
	);
};

export default CartContainer;
