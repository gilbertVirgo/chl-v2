import Button from "../../../components/Button";
import Feature from "../../../components/Feature";
import Lattice from "../../../components/Lattice";
import { Paragraph } from "../../../components/Text";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "../../../components/Section";
import ellipsize from "ellipsize";
import getPodcast from "../../Podcast/getPodcast";

export default ({ onLoad }) => {
	const [[firstEpisode, ...episodes], setEpisodes] = React.useState([]);

	React.useEffect(() => {
		(async function () {
			let { data: episodes } = await getPodcast({ pageSize: 4 });

			console.log({ episodes });

			setEpisodes(
				episodes.sort(
					(a, b) =>
						new Date(b.first_publication_date) -
						new Date(a.first_publication_date)
				)
			);
		})();
	}, []);

	React.useEffect(() => {
		if (episodes.length) onLoad();
	}, [episodes]);

	return (
		episodes.length && (
			<React.Fragment>
				<Section>
					<Feature invert>
						<Feature.Title>{firstEpisode.title}</Feature.Title>
						<Feature.Image
							filter
							href={`/podcast/episode/${firstEpisode.id}`}
							src={firstEpisode.image.url}
						/>
						<Feature.Body>
							<Paragraph>
								{ellipsize(
									RichText.asText(firstEpisode.description),
									120
								)}
							</Paragraph>
						</Feature.Body>
					</Feature>

					<Lattice
						filterImages
						singleRow
						panels={episodes.map(({ id, title, image }) => ({
							title,
							image: image.url,
							href: `/podcast/episode/${id}`,
						}))}
					/>
					<Button theme="grey" href="podcast">
						More from the podcast
					</Button>
				</Section>
			</React.Fragment>
		)
	);
};
