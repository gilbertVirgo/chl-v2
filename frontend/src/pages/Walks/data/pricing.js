import React from "react";
import theme from "../../../theme";

export default [
	// {
	// 	title: "London Day",
	// 	historicPeople: (
	// 		<>
	// 			<strong>City</strong>: William Wilberforce, John Wyclif, John
	// 			Wesley, William Tyndale, George Whitefield, Thomas Watson, Lord
	// 			Shaftesbury, John Newton.
	// 			<br />
	// 			<strong>British Museum</strong>: Abraham, Hezekiah, Isaiah,
	// 			Jehu, Elijah, Daniel, Esther, Nehemiah, Paul.
	// 		</>
	// 	),
	// 	locations: `City of London: St Paul’s Cathedral, Paul’s Cross, Cheapside, One New Change, St Mary le Bow, Bow Lane, Watling Street, St Stephen Walbrook, Mansion House, Bank of England, St Mary Woolnoth.
	//     British Museum`,
	// 	duration: `Two hours and two hours, with a two hour break for lunch and travel`,
	// 	cost: (
	// 		<React.Fragment>
	// 			£25 {/*<span style={{ color: theme.color.red }}>*</span>*/}
	// 		</React.Fragment>
	// 	),
	// },
	{
		title: "City Walk",
		historicPeople: `William Wilberforce, John Wyclif, John Wesley, William Tyndale, George Whitefield, Thomas Watson, Lord Shaftesbury, John Newton`,
		locations: `City of London, St Paul’s Cathedral, Paul’s Cross, Cheapside, One New Change, St Mary le Bow, Bow Lane, Watling Street, St Stephen Walbrook, Mansion House, Bank of England, St Mary Woolnoth`,
		duration: "Two hours",
		cost: "£16",
	},
	{
		title: `British Museum`,
		historicPeople: `Abraham, Hezekiah, Isaiah, Jehu, Elijah, Daniel, Esther, Nehemiah, Paul`,
		locations: `The British Museum `,
		duration: `Two hours`,
		cost: "£16",
	},
	// {
	// 	title: (
	// 		<React.Fragment>
	// 			City Day<sup style={{ color: theme.color.red }}>†</sup>
	// 		</React.Fragment>
	// 	),
	// 	historicPeople: `William Wilberforce, John Wyclif, John Wesley, William Tyndale, George Whitefield, Thomas Watson, Lord Shaftesbury, John Newton, Thomas Cranmer, Nicholas Ridley, Hugh Latimer, John Owen, Charles Spurgeon, Richard Baxter, Charles Wesley, Rahere, the Smithfield Martyrs, John Bunyan, Elizabeth Fry`,
	// 	locations: `City of London: St Paul’s Cathedral, Paul’s Cross, Cheapside, One New Change, St Mary le Bow, Bow Lane, Watling Street, St Stephen Walbrook, Mansion House, Bank of England, St Mary Woolnoth, Royal Exchange, Coleman Street, Guildhall, St Mary Aldermanbury (site of), London Wall, Museum of London, Cloth Fair, St Bartholomew the Great, Smithfield, Snow Fair, St Sepulchre`,
	// 	duration: `Two hours and two hours, with a two hour break for lunch and travel`,
	// 	cost: (
	// 		<React.Fragment>
	// 			£25 {/*<span style={{ color: theme.color.red }}>*</span>*/}
	// 		</React.Fragment>
	// 	),
	// },
	{
		title: (
			<React.Fragment>
				Westminster Walk<sup style={{ color: theme.color.red }}>†</sup>
			</React.Fragment>
		),
		historicPeople: `D. Martyn Lloyd-Jones, John Wesley, George Whitefield, Lord Shaftesbury, George Herbert, William Wilberforce, William Tyndale`,
		locations: `Westminster Chapel, Westminster Central Hall, Westminster Abbey, Parliament Square, St Margaret’s Westminster, Westminster School, Old Palace Yard, `,
		duration: `Two hours`,
		cost: "£16",
	},
	{
		title: (
			<React.Fragment>
				City Walk Pt. 2<sup style={{ color: theme.color.red }}>†</sup>
			</React.Fragment>
		),
		historicPeople: `Thomas Cranmer, Nicholas Ridley, Hugh Latimer, John Owen, Charles Spurgeon, Richard Baxter, Charles Wesley, Rahere, the Smithfield Martyrs, John Bunyan, Elizabeth Fry`,
		locations: `Bank of England, St Mary Woolnoth, Royal Exchange, Coleman Street, Guildhall, St Mary Aldermanbury (site of), London Wall, Museum of London, Cloth Fair, St Bartholomew the Great, Smithfield, Snow Fair, St Sepulchre`,
		duration: "Two hours",
		cost: "£16",
	},
];
