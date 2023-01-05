import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export const createClient = (config = {}) => {
	const client = prismic.createClient("chl-cms", config);

	// prismicNext.enableAutoPreviews({
	// 	client,
	// 	previewData: config.previewData,
	// 	req: config.req,
	// });

	return client;
};
