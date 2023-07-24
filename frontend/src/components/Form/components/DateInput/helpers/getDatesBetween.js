const removeSundays = (date) => date.day() !== 0;

export default (a, b) => {
	let diff = b.diff(a, "day");

	if (Math.abs(diff) > 0)
		return Array(Math.abs(diff) + 1)
			.fill(null)
			.map((v, i) => a[a.isBefore(b) ? "add" : "subtract"](i, "day"))
			.filter(removeSundays);
	else return [a];
};
