import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Footer } from "./components/layout/footer/Footer";
function App() {
	return (
		<>
			<div>
				<Navbar />
				<Home />
				<Footer />
			</div>
		</>
	);
}

export default App;
