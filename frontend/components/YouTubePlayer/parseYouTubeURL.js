export default (url) => {
	if (url.includes("youtube.com") || url.includes("youtu.be")) {
		url = url.replace("youtu.be", "youtube.com");

		if (url.includes("embed")) {
			return url + "?modestbranding=1"; // Remove YouTube branding
		} else {
			let urlParts = url.split("/");
			urlParts.splice(urlParts.length - 1, 0, "embed");
			return urlParts.join("/");
		}
	} else {
		throw new Error(`Expected a YouTube URL. Got "${url}" instead.`);
	}
};
