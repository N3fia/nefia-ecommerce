import "./itemListContainer.css";

export const ItemListContainer = ({ greeting, intro }) => {
	return (
		<div className="welcome-message">
			<h1>{greeting}</h1>
			<p>{intro}</p>
			<a href="#store" className="cta-button">
				Shop Now
			</a>
		</div>
	);
};

export default ItemListContainer;
