const formatOptions = (options) =>
	Object.keys(options)
		.map((key) => `${key}=${options[key]}`)
		.join("&");

export default async (query, options) => {
	const ref = localStorage.getItem("prismic-ref");

	const { results, next_page } = await (
		await fetch(
			`https://chl-cms.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=${encodeURIComponent(
				`[${query}]`
			)}${options ? `&${formatOptions(options)}` : ""}`
		)
	).json();

	// I removed an & from before ${options ..

	const data = results.map(
		({ id, first_publication_date, last_publication_date, data }) => ({
			id,
			first_publication_date,
			last_publication_date,
			...data,
		})
	);

	return { next_page, data };
};
