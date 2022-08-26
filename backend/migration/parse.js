module.exports = (episodes) => {
	return episodes.map(({ data: { fields } }) => {
		// fields[] -> object
		let temp = {};

		fields.forEach(({ name, value }) => (temp[name] = value));

		return temp;
	});
};
