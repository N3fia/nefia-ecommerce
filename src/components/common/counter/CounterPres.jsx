const CounterPres = ({ add, subs, onAdd, counter }) => {
	return (
		<div>
			<button onClick={add}>Add</button>
			<button onClick={subs}>Substract</button>
			<h2>Quantity: {counter}</h2>

			<button onClick={() => onAdd(counter)}>Add to cart</button>
		</div>
	);
};

export default CounterPres;
