export default async (query) => {
	console.log(encodeURIComponent(query));

	const json = (
		await (
			await fetch(
				`https://chl-cms.cdn.prismic.io/api/v2/documents/search?ref=Yqii0REAACEAV3In&q=${encodeURIComponent(
					`[${query}]`
				)}`
			)
		).json()
	).results.map(({ id, data }) => ({ id, ...data }));

	return json;
};
