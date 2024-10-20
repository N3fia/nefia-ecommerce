import { products } from "../../../products";
import Cards from "../../common/cards/Cards";
import "./itemListContainer.css";

let myProductsPromise = new Promise((res, rej) => {
	setTimeout(() => {
		if (products.length === 0) {
			rej("No se hay productos");
		} else {
			res(products);
		}
	}, 2500);
});

export const ItemListContainer = () => {
	myProductsPromise.then((data) => {}).catch((err) => {});
	return (
		// <div className="welcome-message">
		// 	<h1>{greeting}</h1>
		// 	<p>{intro}</p>
		// 	<a href="#store" className="cta-button">
		// 		Shop Now
		// 	</a>
		// </div>
		<Cards />
	);
};

export default ItemListContainer;
