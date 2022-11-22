import { useState } from "react";
import "./App.css";
import CategoriesList from "./components/CategoriesList";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import categories from "./fake-data/all-categories";

function App() {
	const [category, setCategory] = useState(categories);

	function clickHandler(e) {
		console.log("button clicked", e.target.textContent);
		setCategory(e.target.textContent);
	}

	return (
		<div className="App">
			<Header />
			<CategoriesList
				passingToButton={clickHandler}
				selectedCategory={category}
			/>
			<ProductList selectedCategory={category} />
		</div>
	);
}

export default App;
