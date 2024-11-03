import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
	return (
		<div>
			<Link to="/checkout">
				<Button>Checkout</Button>
			</Link>
		</div>
	);
};

export default CartContainer;
