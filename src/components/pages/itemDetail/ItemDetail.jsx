import { Counter } from "../../common/counter/Counter";

const ItemDetail = ({ item, onAdd }) => {
	return (
		<div>
			<h2>{item.title}</h2>
			<img
				src={item.imageUrl}
				style={{ width: "200px", height: "200px" }}
				alt="imagen de producto"
			/>
			<h3>{item.description}</h3>
			<h3>Availability: {item.stock}</h3>
			<h3>Category: {item.category}</h3>

			<Counter stock={item.stock} onAdd={onAdd} />
		</div>
	);
};

export default ItemDetail;
