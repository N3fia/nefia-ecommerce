import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./counter.css";

const CounterPres = ({ add, subs, onAdd, counter }) => {
	return (
		<div>
			<h3>Quantity: {counter}</h3>
			<ButtonGroup variant="text" aria-label="Basic button group">
				<IconButton onClick={add} aria-label="add">
					<AddIcon />
				</IconButton>
				<IconButton onClick={subs} aria-label="add">
					<RemoveIcon />
				</IconButton>
			</ButtonGroup>
			<button className="detail-btns" onClick={() => onAdd(counter)}>
				Add to cart
			</button>
			{/* <button onClick={add}>Add</button>
			<button onClick={subs}>Substract</button>

			*/}
		</div>
	);
};

export default CounterPres;
