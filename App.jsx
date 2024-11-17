import { Navbar } from "./src/components/layout/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./src/components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./src/components/pages/cart/CartContainer";
import NotFound from "./src/components/pages/404/NotFound";
import ItemDetailContainer from "./src/components/pages/itemDetail/ItemDetailContainer";
import CheckOutContainer from "./src/components/pages/checkOut/CheckOutContainer";
import { CartContextProvider } from "./src/context/CartContext";
import { Toaster } from "sonner";

function App() {
	return (
		<BrowserRouter>
			<Toaster duration={3000} richColors position="top-right" closeButton />
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/cart" element={<CartContainer />} />
					<Route path="/category/:category" element={<ItemListContainer />} />
					<Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

					<Route path="/checkout" element={<CheckOutContainer />} />
					<Route path="*" element={<NotFound />} />
					{/* hacer un componenete con un boton para volver al home cuando se hitea una Route que no existe */}
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
