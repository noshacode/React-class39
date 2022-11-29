import React from "react";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";

function Product({ item }) {
	return (
		<div className="product-box">
			<Link to={`/product/${item.id}`}>
				<img className="product-image" src={item.image} alt={item.title}></img>
				<p className="product--title">{item.title}</p>
			</Link>
			<FavButton item={item} />
		</div>
	);
}

export default Product;
