export default (results) => {
	return results.map(({ id, data }) => {
		return { id, data };
	});
};
