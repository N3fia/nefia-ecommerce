import { Link } from "react-router-dom";
import "./cards.css";

export const Cards = ({ id, title, description, price, image }) => {
	return (
		<div className="wrapper">
			<div className="product-img">
				<img src={image} alt="lana" height="420" width="327" />
			</div>
			<div className="product-info">
				<div className="product-text">
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
				<div className="product-price-btn">
					<p>
						<span>{price}</span>$
					</p>
					<Link to={`/itemDetail/${id}`}>
						<button type="button">Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
