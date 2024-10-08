import LogoNoBackground from "../../../assets/images/LogoNoBackground.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<>
			<nav className="nav-conta">
				<img src={LogoNoBackground} alt="brand logo" className="logo" />
				<ul className="list">
					<li>Yarn</li>
					<li>Needles</li>
					<li>Accessories</li>
					<li>Patterns</li>
				</ul>
				<CartWidget />
			</nav>
		</>
	);
};
