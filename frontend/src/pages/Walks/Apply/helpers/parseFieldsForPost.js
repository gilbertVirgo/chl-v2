export default (fields, recaptcha) => {
	const parsedFields = {
		"g-recaptcha-response": recaptcha,
	};

	fields.forEach(({ name, value }) => {
		parsedFields[name] = value;
	});

	// could do some other parsing here.

	return parsedFields;
};
