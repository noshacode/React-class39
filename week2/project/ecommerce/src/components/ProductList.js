import React from "react";
import Product from "./Product";
import list from "../fake-data/all-products";

function ProductList({ selectedCategory }) {
	let filteredList = selectedCategory
		? list.filter((item) => selectedCategory === item.category)
		: list;

	return (
		<div className="products">
			{filteredList.map((item) => (
				<Product key={item.id} item={item} />
			))}
		</div>
	);
}

export default ProductList;
