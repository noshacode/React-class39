import { useState } from "react";
import "./App.css";
import CategoriesList from "./components/CategoriesList";

import ProductList from "./components/ProductList";

function App() {
	const [category, setCategory] = useState("");

	function clickHandler(e) {
		console.log("button clicked", e.target.textContent);
		setCategory(e.target.textContent);
	}

	return (
		<div className="App">
			<h1>Products</h1>
			<CategoriesList
				passingToButton={clickHandler}
				selectedCategory={category}
			/>
			<ProductList selectedCategory={category} />
		</div>
	);
}

export default App;
