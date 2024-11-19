import { Navbar } from "./components/layout/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import NotFound from "./components/pages/404/NotFound";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CheckOutContainer from "./components/pages/checkOut/CheckOutContainer";
import { CartContextProvider } from "./context/CartContext";
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
					<Route path="/category/:name" element={<ItemListContainer />} />
					<Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

					<Route path="/checkout" element={<CheckOutContainer />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
