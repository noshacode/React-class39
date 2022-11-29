import React, { useState, createContext } from "react";

export const FavoritesContext = createContext();

function FavoriteProvider(props) {
	const [fav, setFav] = useState([]);

	return (
		<FavoritesContext.Provider value={[fav, setFav]}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoriteProvider;
