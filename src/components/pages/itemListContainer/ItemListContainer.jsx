import "./itemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
	return (
		<div class="welcome-message">
			<h1>Welcome to Stitch Revolution</h1>
			<p>
				This is more than a knitting shop—it’s a movement! At Mighty Stitch
				Revolution, we’re tearing down the old patterns and crafting a new world
				of creativity. Whether you’re a knitting warrior or just picking up your
				first set of needles, we’ve got the weapons you need: premium yarns,
				cutting-edge tools, and rebellious resources. Together, we’ll unleash
				bold, boundary-breaking designs that defy the ordinary. Join the
				revolution, rise up, and make every stitch a stand for creativity and
				individuality. Let’s shake up the world of crafting—one mighty stitch at
				a time!
			</p>
			<a href="#shop" class="cta-button">
				Shop Now
			</a>
		</div>
	);
};

export default ItemListContainer;
