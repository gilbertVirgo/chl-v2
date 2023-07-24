const areaCodes = require("./area-codes");
const fs = require("fs");
const regionsToCountries = require("./regions-to-countries");

fs.writeFileSync(
	"./output.js",
	JSON.stringify(
		areaCodes.map((a) => {
			let index = Object.values(regionsToCountries).indexOf(a.name),
				region;

			if (index > -1) region = Object.keys(regionsToCountries)[index];

			return { region, ...a };
		})
	),
	"utf-8"
);
