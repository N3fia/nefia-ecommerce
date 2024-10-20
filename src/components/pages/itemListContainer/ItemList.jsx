import { Cards } from "../../common/cards/Cards";

const ItemList = ({ items }) => {
	console.log({ items });
	return (
		<div>
			{items.map(({ id, title, imageUrl, description, price, stock }) => (
				<Cards
					key={id}
					imageUrl={imageUrl}
					title={title}
					description={description}
					price={price}
					stock={stock}
				/>
			))}
		</div>
	);
};

export default ItemList;