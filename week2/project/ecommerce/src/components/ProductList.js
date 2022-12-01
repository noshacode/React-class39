import React, { useState, useEffect } from "react";
import { fetchData } from "../api";
import Product from "./Product";

function ProductList({ selectedCategory }) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const PRODUCT_URL = "https://fakestoreapi.com/products";
	const PRODUCT_CATEGORY_URL = `https://fakestoreapi.com/products/category/${selectedCategory}`;

	useEffect(() => {
		const getData = async () => {
			try {
				const url = selectedCategory ? PRODUCT_CATEGORY_URL : PRODUCT_URL;
				const data = await fetchData(url);
				setData(data);
			} catch (e) {
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		};
		setError("");
		getData();
	}, [selectedCategory, PRODUCT_CATEGORY_URL]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error happened, please refresh the page.</div>;
	}
	return (
		<div className="products">
			{data.map((item) => (
				<Product key={item.id} item={item} />
			))}
		</div>
	);
}

export default ProductList;
