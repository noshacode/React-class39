import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ProductItem from "./components/ProductItem";

function RoutePaths() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/product/:id" element={<ProductItem />} />
			</Routes>
		</div>
	);
}

export default RoutePaths;
