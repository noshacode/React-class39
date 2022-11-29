import React, { useState, useEffect } from "react";
import { fetchData } from "../api";
import { useParams } from "react-router-dom";

function ProductItem() {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setError("");
		const PRODUCT_URL = `https://fakestoreapi.com/products/${id}`;
		const getData = async () => {
			try {
				const data = await fetchData(PRODUCT_URL);
				setData(data);
			} catch (e) {
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [id]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error happened, please refresh the page.</div>;
	}

	return (
		<div>
			<h2>{data.title}</h2>
			<img className="product-image" src={data.image} alt={data.title} />
			<p>{data.description}</p>
			<p>Price - {data.price}</p>
		</div>
	);
}

export default ProductItem;
