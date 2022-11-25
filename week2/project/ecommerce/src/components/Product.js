import React from "react";

function Product({ item }) {
	return (
		<div className="product-box">
			<img className="product-image" src={item.image} alt={item.title}></img>
			<p className="product--title">{item.title}</p>
		</div>
	);
}

export default Product;
