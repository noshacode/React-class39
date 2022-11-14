import {useState} from 'react';
import "./App.css";
import CategoriesList from "./components/CategoriesList";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import categories from "./fake-data/all-categories";

function App() {

	const [category, setCategory] = useState(categories);



	return (
		<div className="App">
			<Header />
			<CategoriesList passingToButton={setCategory} />
			<ProductList selectedCategory={category} />
		</div>
	);
}

export default App;
