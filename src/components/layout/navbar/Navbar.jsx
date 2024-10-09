import LogoNoBackground from "../../../assets/images/LogoNoBackground.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<>
			<nav className="nav-conta">
				<img src={LogoNoBackground} alt="brand logo" className="logo" />

				<ul className="list">
					<a href="#yarn">
						<li>Yarn</li>
					</a>
					<a href="#needles">
						<li>Needles</li>
					</a>
					<a href="#accessories">
						<li>Accessories</li>
					</a>
					<a href="#patterns">
						<li>Patterns</li>
					</a>
				</ul>
				<CartWidget />
			</nav>
		</>
	);
};
