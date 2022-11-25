export const fetchData = async (url) => {
	const res = await fetch(url);
	if (res.ok) {
		return await res.json();
	}
	throw new Error("API request failed");
};
