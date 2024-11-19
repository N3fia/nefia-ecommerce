// import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./notFound.css";
const NotFound = () => {
	return (
		<div>
			<span className="image-container">
				<img
					src="https://res.cloudinary.com/dhmbftmbi/image/upload/v1732052475/404_1000_lrznq8.png"
					alt="404 image - page not found"
				/>
				<div className="product-price-btn">
					<Link to={`/`}>
						<button type="button">Home</button>
					</Link>
				</div>
			</span>
		</div>
	);
};

export default NotFound;
