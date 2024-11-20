import { Link } from "react-router-dom";
import "./cards.css";

export const Cards = ({ id, title, price, image }) => {
	return (
		<div className="wrapper">
			<div className="product-img">
				<img src={image} alt="product image" height="210" width="164" />
			</div>
			<div className="product-info">
				<div className="product-text">
					<h1>{title}</h1>
				</div>
				<div className="product-price">
					<p>
						<span>{price}</span>$
					</p>
				</div>
				<div className="product-btn">
					<Link to={`/itemDetail/${id}`}>
						<button type="button">Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
