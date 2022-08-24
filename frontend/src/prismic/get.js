const formatOptions = (options) =>
	Object.keys(options)
		.map((key) => `${key}=${options[key]}`)
		.join("&");

export default async (query, options) => {
	console.log(encodeURIComponent(query.toString()));

	const ref = localStorage.getItem("prismic-ref");

	const json = (
		await (
			await fetch(
				`https://chl-cms.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=${encodeURIComponent(
					`[${query}]`
				)}&${
					options
						? `&${formatOptions({
								orderings: "[document.first_publication_date]",
								...options,
						  })}`
						: ""
				}`
			)
		).json()
	).results.map(({ id, data }) => ({ id, ...data }));

	console.log("From GET", json);

	return json;
};
