import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
	return (
		<div>
			<Navbar />

			<ItemListContainer />
			<ItemDetailContainer />
		</div>
	);
}

export default App;
