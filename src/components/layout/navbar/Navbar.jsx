import LogoNoBackground from "../../../assets/images/LogoNoBackground.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { useState } from "react";
import "./navbar.css";

// export const Navbar = () => {
// 	return (
// 		<>
// 			<nav className="nav-conta">
// 				<img src={LogoNoBackground} alt="brand logo" className="logo" />

// 				<ul className="list">
// 					<a href="#yarn">
// 						<li>Yarn</li>
// 					</a>
// 					<a href="#needles">
// 						<li>Needles</li>
// 					</a>
// 					<a href="#accessories">
// 						<li>Accessories</li>
// 					</a>
// 					<a href="#patterns">
// 						<li>Patterns</li>
// 					</a>
// 				</ul>
// 				<CartWidget />
// 			</nav>
// 		</>
// 	);
// };

export const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<nav className={`nav-conta ${isActive ? "active" : ""}`}>
				<img src={LogoNoBackground} alt="brand logo" className="logo" />

				<div className="hamburger" onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>

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
