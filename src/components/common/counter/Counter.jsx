import { useState } from "react";
import CounterPres from "./CounterPres";

export const Counter = ({ stock, addToCart }) => {
	const [counter, setCounter] = useState(0);

	const add = () => {
		stock > counter
			? setCounter(counter + 1)
			: alert("no more items are available right now");
	};
	const subs = () => {
		setCounter(counter - 1);
	};
	return <CounterPres counter={counter} add={add} addToCart={addToCart} subs={subs}/>;
};
