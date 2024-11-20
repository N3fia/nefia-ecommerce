import ColorLogoNoBgrd from "../../../assets/images/ColorLogoNoBgrd.svg";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<nav className={`nav-conta ${isActive ? "active" : ""}`}>
				<Link to="/">
					<img src={ColorLogoNoBgrd} alt="brand logo" className="logo" />
				</Link>
				<div className="hamburger" onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<ul className="list">
					<Link to="/category/yarn">Yarn</Link>

					<Link to="/category/needles">Needles</Link>

					<Link to="/category/accessories">Accessories</Link>

					<Link to="/category/patterns">Patterns</Link>
				</ul>
				<CartWidget />
			</nav>
		</>
	);
};
