import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

export const CartWidget = () => {
	const { cTotalPrd } = useContext(CartContext);

	return (
		<Link to="/cart">
			<IconButton aria-label="cart">
				<StyledBadge badgeContent={cTotalPrd()} color="secondary" showZero>
					<ShoppingCartIcon />
				</StyledBadge>
			</IconButton>
		</Link>
	);
};
