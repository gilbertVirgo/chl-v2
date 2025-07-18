import * as prismic from "@prismicio/client";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import ContentGrid from "../../components/ContentGrid";
import Feature from "../../components/Feature";
import HighlightedEvent from "../../components/HighlightedEvent";
import { Link } from "react-router-dom";
import { Paragraph } from "../../components/Text";
import React from "react";
import Section from "../../components/Section";
import dayjs from "dayjs";
import get from "../../prismic/get";
import getBlog from "../Blog/getBlog";
import getPodcast from "../Podcast/getPodcast";

export default () => {
	const [podcast, setPodcast] = React.useState(null);
	const [blog, setBlog] = React.useState(null);
	const [highlightedEvent, setHighlightedEvent] = React.useState(null);

	React.useEffect(() => {
		(async function () {
			let {
				data: [highlighted_event],
			} = await get(
				[prismic.predicate.at("document.type", "highlighted_event")],
				{
					fetchLinks:
						"event.title,event.image,event.content,event.date_and_time",
				}
			);

			setHighlightedEvent(highlighted_event);

			let { data: podcast } = await getPodcast({
				pageSize: 4,
				orderings: "[my.podcast.original_date_published desc]",
			});

			setPodcast(podcast);

			let { data: blog } = await getBlog({
				pageSize: 4,
				orderings: "[document.first_publication_date desc]",
			});

			setBlog(blog);

			console.log({ podcast, blog });
		})();
	}, []);

	const loading = !podcast || !blog;

	console.log({ highlightedEvent });

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={loading} />

			{!loading &&
				!!highlightedEvent &&
				highlightedEvent.visibility &&
				dayjs().isBefore(highlightedEvent.finish_timestamp) && (
					<HighlightedEvent event={highlightedEvent.event} />
				)}

			<Section innerStyle={{ paddingTop: 0 }}>
				{!loading && (
					<ContentGrid singleRow deflate articles={podcast} />
				)}
				<Button theme="grey" href="podcast">
					See more episodes
				</Button>
			</Section>
			<Section innerStyle={{ paddingTop: 0 }} dark>
				{!loading && (
					<ContentGrid hasAuthor singleRow deflate articles={blog} />
				)}
				<Button theme="grey" href="articles">
					See more articles
				</Button>
			</Section>

			<Section>
				<Feature invert>
					<Feature.Title>Book a tour</Feature.Title>
					<Feature.Embed src="https://www.youtube.com/embed/iF2ozY92F9w" />
					<Feature.Body>
						<Paragraph>
							We give walking tours through London&apos;s church
							history and the British Museum to groups as small as
							four people.
						</Paragraph>
						<br />
						<Button
							href="https://bookings.christianheritagelondon.org"
							theme="red"
							suspend
						>
							Book a tour
						</Button>
						{/* <Paragraph small>
							Private tours are also available.{" "}
							<Link to="/contact/private-tour">
								Enquire about a private tour
							</Link>
						</Paragraph> */}
					</Feature.Body>
				</Feature>
			</Section>

			<Section>
				<Feature invert>
					<Feature.Title>
						National & International Tours
					</Feature.Title>
					<Feature.Embed src="https://www.youtube.com/embed/3pEPbAQrYNA" />
					<Feature.Body>
						<Paragraph>
							Christian Heritage London gives tours through the
							places where Jesus Christ walked, where the Bible
							was written, where church history happened, where
							the Reformation broke out and where revivals changed
							nations.
						</Paragraph>
						<Button
							href="/contact/international-tour"
							theme="red"
							suspend
						>
							Enquire about an International Tour
						</Button>
					</Feature.Body>
				</Feature>
			</Section>
		</React.Fragment>
	);
};
