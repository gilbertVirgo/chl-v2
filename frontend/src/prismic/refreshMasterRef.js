export default () =>
	new Promise(async (res, rej) => {
		try {
			const req = await fetch("https://chl-cms.prismic.io/api/v2");
			const {
				refs: [{ ref }],
			} = await req.json();

			localStorage.setItem("prismic-ref", ref);

			res(ref);
		} catch (err) {
			rej("No ref returned from Prismic.", err);
		}
	});
