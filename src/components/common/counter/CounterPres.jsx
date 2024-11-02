const CounterPres = ({ add, subs, addToCart, counter }) => {
	return (
		<div>
			<button onClick={add}>Add</button>
			<h2>Quantity: {counter}</h2>
			<button onClick={subs}>Substract</button>
			<button onClick={() => addToCart(counter)}>Add to cart</button>
		</div>
	);
};

export default CounterPres;
