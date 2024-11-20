import { Cards } from "../../common/cards/Cards";

const ItemList = ({ items }) => {
	// console.log({ items });
	return (
		<div className="item-list-grid">
			{items.map(({ id, title, imageUrl, description, price, stock }) => (
				<Cards
					key={id}
					image={imageUrl}
					title={title}
					description={description}
					price={price}
					stock={stock}
					id={id}
				/>
			))}
		</div>
	);
};

export default ItemList;
