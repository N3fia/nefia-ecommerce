import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
function App() {
	return (
		<div>
			<Navbar />

			<ItemListContainer
				greeting={"Welcome to Stitch Revolution"}
				intro={
					"This is more than a knitting shop—it’s a movement! AtStitch Revolution, we’re tearing down the old patterns and crafting a new world of creativity. Whether you’re a knitting warrior or just picking up your first set of needles, we’ve got the weapons you need: premium yarns, cutting-edge tools, and rebellious resources. Together, we’ll unleash bold, boundary-breaking designs that defy the ordinary. Join the revolution, rise up, and make every stitch a stand for creativity and comunity. Let’s shake up the world of crafting—one mighty stitch at a time!"
				}
			/>
		</div>
	);
}

export default App;
