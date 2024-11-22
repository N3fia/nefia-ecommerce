import { Box, Button, Input, Typography } from "@mui/material";
import "./checkOut.css";

const CheckOutPres = ({
	userData,
	orderId,
	handleInputChange,
	handleSubmit,
	handleCancel,
}) => {
	return (
		<div className="checkout-container">
			{orderId ? (
				<Box className="checkout-success">
					<Typography variant="h5" className="success-message">
						Thanks for shopping with us!
					</Typography>
					<Typography variant="body1" className="order-id-message">
						Your order ID is:
					</Typography>
					<Typography variant="h6" className="order-id">
						{orderId}
					</Typography>
				</Box>
			) : (
				<form onSubmit={handleSubmit} className="checkout-form">
					<Input
						type="text"
						placeholder="Jhon Doe"
						name="name"
						value={userData.name}
						onChange={handleInputChange}
						required
					/>
					<Input
						type="email"
						placeholder="email@email.com"
						name="email"
						value={userData.email}
						onChange={handleInputChange}
						required
					/>
					<Input
						type="text"
						placeholder="+123456789"
						name="phoneNum"
						value={userData.phoneNum}
						onChange={handleInputChange}
						required
					/>
					<div className="checkout-buttons">
						<Button type="submit" variant="contained" color="primary">
							Submit Order
						</Button>
						<Button variant="outlined" color="secondary" onClick={handleCancel}>
							Cancel
						</Button>
					</div>
				</form>
			)}
		</div>
	);
};

export default CheckOutPres;
