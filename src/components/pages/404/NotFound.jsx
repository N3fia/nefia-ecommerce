// import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./notFound.css";
const NotFound = () => {
	return (
		<div>
			<span className="image-container">
				<img
					src="https://res.cloudinary.com/dhmbftmbi/image/upload/v1732272518/404_1000_vuezc1.svg"
					alt="404 image - page not found"
				/>
				<div className="btn">
					<Link to={`/`}>
						<button type="button">Home</button>
					</Link>
				</div>
			</span>
		</div>
	);
};

export default NotFound;
