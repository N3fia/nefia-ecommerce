import "./cards.css";

export const Cards = ({ title, description, price, stock, imageUrl }) => {
	return (
		<div className="wrapper">
			<div className="product-img">
				<img src={imageUrl} alt="lana" height="420" width="327" />
			</div>
			<div className="product-info">
				<div className="product-text">
					<h1>{title}</h1>
					<p>{description}</p>
					<p>{stock}</p>
				</div>
				<div className="product-price-btn">
					<p>
						<span>{price}</span>$
					</p>
					<button type="button">buy now</button>
				</div>
			</div>
		</div>
	);
};
