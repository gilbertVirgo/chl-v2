import {
	Reference,
	SocialIcon,
	SocialsWrapper,
	Strapline,
	Verse,
	Wrapper,
} from "./styles";

import Grid from "../Grid";
import Section from "../Section";
import socialInfo from "./social-info";

export default () => (
	<Section dark style={{ marginBottom: "0" }}>
		<Grid>
			<Strapline>
				<Verse>
					Remember your leaders, those who spoke to you the word of
					God. Consider the outcome of their way of life, and imitate
					their faith.
				</Verse>
				<Reference>Hebrews 13:7 ESV</Reference>
			</Strapline>
			<SocialsWrapper>
				{socialInfo.map((props) => (
					<SocialIcon target="_blank" {...props} />
				))}
			</SocialsWrapper>
		</Grid>
	</Section>
);
