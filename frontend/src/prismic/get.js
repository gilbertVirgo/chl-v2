export default async (query) => {
	console.log(encodeURIComponent(query.toString()));

	const ref = "Yqii0REAACEAV3In";

	const json = (
		await (
			await fetch(
				`https://chl-cms.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=${encodeURIComponent(
					`[${query}]`
				)}`
			)
		).json()
	).results.map(({ id, data }) => ({ id, ...data }));

	console.log("From GET", json);

	return json;
};
