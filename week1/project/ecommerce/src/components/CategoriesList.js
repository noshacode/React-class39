import React from "react";
import categories from "../fake-data/all-categories";

function CategoriesList({ passingToButton }) {
	return (
		<div>
			{categories.map((category) => (
				<button className="categories" key={category} onClick={() => passingToButton([category])}>
					{category}
				</button>
			))}
		</div>
	);
}

export default CategoriesList;
