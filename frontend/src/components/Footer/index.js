import {
	ConnectWrapper,
	LinksWrapper,
	Reference,
	SocialIcon,
	SocialsWrapper,
	Strapline,
	Verse,
	Wrapper,
} from "./styles";

import { Caption } from "../Text";
import Grid from "../Grid";
import { Link } from "react-router-dom";
import NewsletterSubscribe from "../NewsletterSubscribe";
import Section from "../Section";
import socialInfo from "./social-info";

export default () => (
	<Section dark style={{ marginBottom: "0", color: "white" }}>
		<Grid>
			<Strapline>
				<Verse>
					Remember your leaders, those who spoke to you the word of
					God. Consider the outcome of their way of life, and imitate
					their faith.
				</Verse>
				<Reference>Hebrews 13:7 ESV</Reference>
			</Strapline>
			<ConnectWrapper>
				<NewsletterSubscribe />
				<SocialsWrapper>
					{socialInfo.map((props) => (
						<SocialIcon {...props} />
					))}
				</SocialsWrapper>
				<LinksWrapper>
					{["Donate", "Privacy"].map((text) => (
						<Link to={`/${text.toLowerCase()}`}>
							<Caption style={{ color: "white" }}>{text}</Caption>
						</Link>
					))}
				</LinksWrapper>
			</ConnectWrapper>
		</Grid>
	</Section>
);
