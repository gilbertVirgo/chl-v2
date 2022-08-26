const express = require("express");
const app = express();
const episodes = require("./episodes");
const parse = require("./parse");

app.get("/index/:index", (req, res) => {
	const parsed = parse(episodes);

	res.send(`
        <html>
            <body>
                ${Object.keys(parsed[+req.params.index])
					.map((key) => {
						let val = parsed[+req.params.index][key];

						if (typeof val === "string") {
							switch (key) {
								case "audio":
									val = val.replace("https://", "");
									break;
								case "ytid":
									val = "youtube.com/" + val;
									break;
								case "pubDate":
									let [y, m, d] = val.split("-");
									val = [m, d, y].join("-");
									break;
							}
						}

						return `<input type="text" name="${key}" value="${val}" />`;
					})
					.join("")}

                <script>
                    document.querySelectorAll("input").forEach(input => {
                        input.addEventListener("click", function() {
                            this.select();
                            navigator.clipboard.writeText(this.value);
                        })
                    })
                </script>
                
                <a href="/index/${+req.params.index + 1}">Next</a>
            </body>
        </html>
    `);
});

app.listen(4000, () => console.log("Server started on 4000"));
