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
