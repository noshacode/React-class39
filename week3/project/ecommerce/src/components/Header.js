import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
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
