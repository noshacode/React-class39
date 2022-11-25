import React, { useState, useEffect } from "react";
import { fetchData } from "../api";

function CategoriesList({ passingToButton, selectedCategory }) {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const CATEGORY_URL = "https://fakestoreapi.com/products/categories";

	const getData = async () => {
		try {
			const data = await fetchData(CATEGORY_URL);
			setCategories(data);
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setError("");
		getData();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error happened, please refresh the page.</div>;
	}

	return (
		<div>
			{categories.map((category) => (
				<button
					className={`categories ${
						category === selectedCategory ? "active" : ""
					}`}
					key={category}
					onClick={passingToButton}
				>
					{category}
				</button>
			))}
		</div>
	);
}

export default CategoriesList;
