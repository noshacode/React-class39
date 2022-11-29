import React from "react";
import FavoriteProvider from "./FavoritesContext";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ProductItem from "./components/ProductItem";
import FavoriteList from "./components/FavoriteList";

function RoutePaths() {
	return (
		<div>
			<FavoriteProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/product/:id" element={<ProductItem />} />
					<Route path="/favorites" element={<FavoriteList />} />
				</Routes>
			</FavoriteProvider>
		</div>
	);
}

export default RoutePaths;
