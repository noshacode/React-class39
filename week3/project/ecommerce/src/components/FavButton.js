import React from "react";
import { FavoritesContext } from "../FavoritesContext";
import { useContext } from "react";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";

function FavButton({ item }) {
	const [fav, setFav] = useContext(FavoritesContext);

	function clickFav() {
		const newFav = [...fav, item.id];
		setFav(newFav);
	}
	function removeFav() {
		const filterFavById = fav.filter((i) => i !== item.id);
		setFav(filterFavById);
	}
	return (
		<>
			{fav.includes(item.id) ? (
				<button onClick={removeFav}>
					<img className="heart" src={heartSolid} alt="heartSolid" />
				</button>
			) : (
				<button onClick={clickFav}>
					<img className="heart" src={heartRegular} alt="heartregular" />
				</button>
			)}
		</>
	);
}

export default FavButton;
