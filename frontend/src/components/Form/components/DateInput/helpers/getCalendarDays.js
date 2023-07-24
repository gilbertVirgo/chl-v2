const getPrevMonth = (selectedMonth) => {
	console.log();

	return (selectedMonth.day() + 6) % 7 > 0
		? Array((selectedMonth.day() + 6) % 7)
				.fill(null)
				.map((v, i, arr) => ({
					inSelectedMonth: false,
					date: selectedMonth
						.subtract(1, "month")
						.endOf("month")
						.subtract(arr.length, "day")
						.add(i + 1, "day"),
				}))
		: [];
};

const getSelectedMonth = (selectedMonth) =>
	Array(selectedMonth.daysInMonth())
		.fill(null)
		.map((v, i) => ({
			inSelectedMonth: true,
			date: selectedMonth.date(i + 1),
		}));

const getNextMonth = (selectedMonth) =>
	7 - selectedMonth.endOf("month").day() > 0
		? Array(7 - selectedMonth.endOf("month").day())
				.fill(null)
				.map((v, i) => ({
					inSelectedMonth: false,
					date: selectedMonth.add(1, "month").date(i + 1),
				}))
		: [];

export default (selectedMonth) => [
	...getPrevMonth(selectedMonth),
	...getSelectedMonth(selectedMonth),
	...getNextMonth(selectedMonth),
];
