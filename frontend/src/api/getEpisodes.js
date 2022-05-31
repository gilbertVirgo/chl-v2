export default async () => {
	const request = await fetch(
		"https://api.christianheritagelondon.org/api/v1/episodes"
	);
	let episodes = await request.json();

	return episodes.map(({ data: { fields } }) => {
		// fields[] -> object
		let temp = {};

		fields.forEach(({ name, value }) => (temp[name] = value));

		return temp;
	});
};
