export default async function refreshMasterRef() {
	const req = await fetch("https://chl-cms.prismic.io/api/v2");
	const {
		refs: [{ ref }],
	} = await req.json();

	localStorage.setItem("prismic-ref", ref);

	// Refresh every minute
	setTimeout(refreshMasterRef, 1000 * 60);
}
