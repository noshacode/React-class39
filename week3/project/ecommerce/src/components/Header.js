import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<h1>Products</h1>
			<div className="header">
				<Link className="header1" to="/">
					product
				</Link>
				<Link className="header1" to="/favorites">
					Favorites
				</Link>
			</div>
		</div>
	);
}

export default Header;
