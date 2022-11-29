import React, { useContext } from "react";
import { FavoritesContext } from "../FavoritesContext";

function FavoriteList() {
	const [fav, setFav] = useContext(FavoritesContext);

	return (
		<div>
			<h1>Favorites</h1>
			{fav.map((favItem) => (
				<div key={favItem}>{favItem}</div>
			))}
		</div>
	);
}

export default FavoriteList;
