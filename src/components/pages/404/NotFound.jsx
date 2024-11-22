// import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./notFound.css";
const NotFound = () => {
	return (
		<div>
			<span className="image-container">
				<img
					src="src/assets/images/404_1000.svg"
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
