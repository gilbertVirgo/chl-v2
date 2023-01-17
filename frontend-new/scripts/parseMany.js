import parseOne from "./parseOne";

export default (results) => ({
	asArticles: () => results.map((r) => parseOne(r).asArticle()),
	asEpisodes: () => results.map((r) => parseOne(r).asEpisode()),
});
