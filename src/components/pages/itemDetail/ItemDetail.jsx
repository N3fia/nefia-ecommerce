import { Counter } from "../../common/counter/Counter";

const ItemDetail = ({ item, onAdd, pQtyCart }) => {
	return (
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
				<div className="">
					<Counter stock={item.stock} onAdd={onAdd} pQtyCart={pQtyCart} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
