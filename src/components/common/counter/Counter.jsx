import { useState } from "react";

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const add = () => {
		setCounter(counter + 1);
	};
	const subs = () => {
		setCounter(counter - 1);
	};
	return (
		<div>
			<button onClick={add}>Add to Cart</button>
			<h2>Quantity: {counter}</h2>
			<button onClick={subs}>Remove from Cart</button>
		</div>
	);
};
