export default (fields) => {
	const parsedFields = {};

	fields.forEach(({ name, value }) => {
		parsedFields[name] = value;
	});

	const nameParts = parsedFields.name.split(" ");
	parsedFields.lastname = nameParts.slice(-1).toString();
	nameParts.pop();
	parsedFields.firstname = nameParts.join(" ");

	delete parsedFields.name;

	return parsedFields;
};
