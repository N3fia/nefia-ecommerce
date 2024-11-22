import { Counter } from "../../common/counter/Counter";
// import { Link } from "react-router-dom";

const ItemDetail = ({ item, onAdd, pQtyCart }) => {
	return (
		// <div>
		// 	<h2>{item.title}</h2>
		// 	<img
		// 		src={item.imageUrl}
		// 		style={{ width: "200px", height: "200px" }}
		// 		alt="imagen de producto"
		// 	/>
		// 	<h3>{item.description}</h3>
		// 	{/* <h3>Availability: {item.stock}</h3> */}
		// 	{/* <h3>Category: {item.category}</h3> */}

		// 	<Counter stock={item.stock} onAdd={onAdd} pQtyCart={pQtyCart} />
		// </div>
		<div className="new-wrapper">
			<div className="new-product-img">
				<img src={item.imageUrl} alt="lana" height="420" width="327" />
			</div>
			<div className="new-product-info">
				<div className="new-product-text">
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</div>
				<span className="new-span">{item.price}</span>$
				{/* <div className="new-product-price-btn"> */}
				<div className="">
					<Counter stock={item.stock} onAdd={onAdd} pQtyCart={pQtyCart} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
