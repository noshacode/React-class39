import React from "react";
import { Link } from "react-router-dom";

function Product({ item }) {
	return (
		<Link to={`/product/${item.id}`}>
			<div className="product-box">
				<img className="product-image" src={item.image} alt={item.title}></img>
				<p className="product--title">{item.title}</p>
			</div>
		</Link>
	);
}

export default Product;
