import { useState } from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CustomAlert() {
	const [open, setOpen] = useState(true);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	return (
		<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity="success"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={handleClose}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
			>
				This is a success alert!
			</Alert>
		</Snackbar>
	);
}

export default CustomAlert;
