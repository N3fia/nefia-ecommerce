import { useState } from "react";
import CounterPres from "./CounterPres";

export const Counter = ({ stock, onAdd }) => {
	const [counter, setCounter] = useState(1);

	const add = () => {
		stock > counter
			? setCounter(counter + 1)
			: alert("no more items are available right now");
	};
	const subs = () => {
		counter > 1 && setCounter(counter - 1);
	};
	return <CounterPres counter={counter} add={add} onAdd={onAdd} subs={subs} />;
};
