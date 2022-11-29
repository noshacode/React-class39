import React, { useContext } from "react";
import { FavoritesContext } from "../FavoritesContext";
import ProductItem from "./ProductItem";

function FavoriteList() {
	const [fav, setFav] = useContext(FavoritesContext);

	return (
		<div>
			<h1>Favorites</h1>
			{fav.map((favId) => (
				<div key={favId}>
					<ProductItem propId={favId} />
				</div>
			))}
		</div>
	);
}

export default FavoriteList;
