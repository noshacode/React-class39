import React, { useState } from "react";
import categories from "../fake-data/all-categories";

function CategoriesList({ passingToButton, selectedCategory }) {
	return (
		<div>
			{categories.map((category) => (
				<button
					className={`categories ${
						category === selectedCategory ? "active" : ""
					}`}
					key={category}
					onClick={passingToButton}
				>
					{category}
				</button>
			))}
		</div>
	);
}

export default CategoriesList;
