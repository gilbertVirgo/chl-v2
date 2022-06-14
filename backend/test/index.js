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
					.map(
						(key) =>
							`<input type="text" name="${key}" value="${
								parsed[+req.params.index][key]
							}" />`
					)
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

app.listen(4000, () => console.log("server started"));
