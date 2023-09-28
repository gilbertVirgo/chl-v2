export default (fields) => {
	const parsedFields = {};

	fields.forEach(({ name, value }) => {
		parsedFields[name] = value;
	});

	// could do some other parsing here.

	return parsedFields;
};
