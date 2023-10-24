import * as Form from "../../../components/Form";

import { Link } from "react-router-dom";

export default [
	{
		label: "Your First Name",
		name: "firstname",
		required: true,
		value: "Test",
	},
	{
		label: "Your Last Name",
		name: "lastname",
		required: true,
		value: "Test",
	},
	{
		label: "Your Email",
		name: "email",
		required: true,
		placeholder: "e.g. johndoe@example.com",
		type: "email",
		value: "gilbertjvirgo+test123@gmail.com",
	},
	{
		label: "Your Phone Number",
		name: "phone",
		required: true,
		Element: Form.Phone,
	},
	{
		label: "Potential Dates",
		name: "potential_dates",
		required: true,
		Element: Form.Date,
		tip: (
			<>
				<b>Click</b> or <b>drag</b> to select individual dates or ranges
				of potential dates respectively.
			</>
		),
		value: ["12/11/2023", "13/11/2023"],
	},
	{
		label: "Number of Guests (can be approximate)",
		name: "group_size",
		min: "1",
		required: true,
		type: "number",
		tip: (
			<>
				If your group is less than four people, and you would prefer not
				to be joined by other groups,{" "}
				<Link to="/contact/private-tour">
					enquire about a private tour
				</Link>
				.
			</>
		),
		value: "314",
	},
	{
		label: "Comments or Questions",
		name: "comments_or_questions",
		Element: Form.Textarea,
		value: "This is a test (obviously)",
	},
];
