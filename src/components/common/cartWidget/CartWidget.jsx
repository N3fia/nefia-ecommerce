import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

export const CartWidget = () => {
	return (
		<Link to="/cart">
			<IconButton aria-label="cart" style={{ margin: 20 }}>
				<StyledBadge badgeContent={3} color="secondary">
					<ShoppingCartIcon />
				</StyledBadge>
			</IconButton>
		</Link>
	);
};
