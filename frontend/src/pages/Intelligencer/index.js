import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
	TextGroup,
} from "../../components/Text";

import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Modal from "../../components/Modal";
import NewsletterSubscribe from "../../components/NewsletterSubscribe";
import React from "react";
import Section from "../../components/Section";

export default () => {
	let [showModal, setShowModal] = React.useState(false);

	let handleShareButtonClicked = () => {
		navigator.clipboard.writeText(
			"https://christianheritagelondon.org/intelligencer"
		);
		setShowModal(true);
	};

	return (
		<React.Fragment>
			<Modal show={showModal} onClose={() => setShowModal(false)}>
				<Subheading>Thanks for sharing</Subheading>
				<Paragraph>
					The link to this page has been copied to your clipboard
				</Paragraph>
			</Modal>
			<Section dark>
				<Hero
					video="https://www.youtube.com/embed/zRCLi8zCRpM?modestbranding=1"
					thumbnail="https://images.prismic.io/chl-cms/Zz3TD68jQArT1Edt_pexels-andrew-23123691.jpg?auto=format,compress"
				>
					<Heading>The Intelligencer</Heading>
				</Hero>
			</Section>
			<Section deflate>
				<TextGroup>
					<Subheading>
						Christian Heritage London exists to talk about how the
						gospel has changed the world.
					</Subheading>
					<Paragraph>
						We&lsquo;re also very aware that the world is still
						changing. The Intelligencer is a weekly email compiled
						by Dr Kenneth Brownell.
					</Paragraph>
					<Paragraph>
						The Intelligencer shares articles and resources which we
						think will be of interest to help you to keep up with
						cultural change, constructive perspectives, and
						theological insights.
					</Paragraph>
				</TextGroup>
			</Section>
			<Section skinny>
				<NewsletterSubscribe
					dark
					customURL="//christianheritagelondon.us22.list-manage.com/subscribe/post?u=589f0e91f842c651e7e9fcaee&amp;id=aa5f0669fd&amp;f_id=00d6c2e1f0"
				/>
				<Button
					theme="grey"
					style={{ marginTop: "10px" }}
					onClick={handleShareButtonClicked}
				>
					Share the Intelligencer
				</Button>
			</Section>
		</React.Fragment>
	);
};
