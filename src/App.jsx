import { Navbar } from "./components/layout/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import NotFound from "./components/pages/404/NotFound";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/cart" element={<CartContainer />} />
				<Route path="/category/:category" element={<ItemListContainer />} />
				<Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
				<Route />

				<Route path="*" element={<NotFound />} />
				{/* hacer un componenete con un boton para volver al home cuando se hitea una Route que no existe */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
