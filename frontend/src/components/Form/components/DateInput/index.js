import ControlBar from "./components/ControlBar";
import Day from "./components/Day";
import DayBar from "./components/DayBar";
import Grid from "./components/Grid";
import HiddenInput from "./components/HiddenInput";
import React from "react";
import Tooltip from "./components/Tooltip";
import dayjs from "dayjs";
import formatDate from "./helpers/formatDate";
import getCalendarDays from "./helpers/getCalendarDays";
import getDatesBetween from "./helpers/getDatesBetween";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export default ({ name, value, defaultValue, onChange }) => {
	const [selectedMonth, setSelectedMonth] = React.useState(dayjs().date(1));
	const [selectedDates, setSelectedDates] = React.useState([]);
	const [range, setRange] = React.useState([]);
	const [rangePositive, setRangePositive] = React.useState();

	const handleRangeStart = (date, selected) => {
		setRange([date, date]);
		setRangePositive(!selected);
	};

	const handleRangeChange = (date) => {
		setRange(([a, b]) => {
			if (date.isBefore(a)) return [date, b];
			else if (date.isAfter(a)) return [a, date];
			else return [date, date];
		});
	};

	const handleRangeFinish = () => {
		if (range.length)
			setSelectedDates((selectedDates) => {
				if (rangePositive)
					return [
						...new Set([
							...selectedDates,
							...getDatesBetween(...range).map(formatDate),
						]),
					];
				else
					return selectedDates.filter(
						(d) =>
							!getDatesBetween(...range)
								.map(formatDate)
								.includes(d)
					);
			});
		setRange([]);
	};

	React.useEffect(() => {
		onChange(selectedDates.toString());
	}, [selectedDates]);

	React.useEffect(() => {
		window.addEventListener("mouseup", handleRangeFinish);

		return () => window.removeEventListener("mouseup", handleRangeFinish);
	}, []);

	return (
		<Tooltip.Trigger>
			<Grid style={{ position: "relative" }}>
				<HiddenInput
					name={name}
					type="text"
					value={value}
					defaultValue={defaultValue}
					required
				/>
				<ControlBar
					selectedMonth={selectedMonth}
					onChange={setSelectedMonth}
				/>
				{DayBar}
				{getCalendarDays(selectedMonth).map((p) => (
					<Day
						{...p}
						selected={selectedDates.includes(formatDate(p.date))}
						inRange={
							range.length &&
							p.date.isBetween(range[0], range[1], "day", "[]")
						}
						range={range}
						onRangeStart={handleRangeStart}
						onRangeFinish={handleRangeFinish}
						onRangeChange={handleRangeChange}
						disabled={
							p.date.day() === 0 ||
							p.date.isBefore(dayjs(), "date")
						}
					/>
				))}
			</Grid>
			<Tooltip />
		</Tooltip.Trigger>
	);
};
