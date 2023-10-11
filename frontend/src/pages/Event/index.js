import { BlockQuote, Image } from "../../components/Article/styles";
import {
	Caption,
	Heading,
	Paragraph,
	Subheading,
	TextGroup,
} from "../../components/Text";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import DefaultGrid from "../../components/Grid";
import { Icon } from "../../components/Button/styles";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import Section from "../../components/Section";
import dayjs from "dayjs";
import getEventByUID from "./getEventByUID";
import theme from "../../theme";
import { useParams } from "react-router-dom";

export default () => {
	const [props, setProps] = React.useState(null);

	const { uid } = useParams();

	React.useEffect(() => {
		(async function () {
			const props = (await getEventByUID(uid)).data[0];

			setProps(props);
		})();
	}, []);

	if (props) {
		const dayjsInstance = dayjs(props.date_and_time);

		props.date = dayjsInstance.format("DD/MM/YYYY");
		props.time = dayjsInstance.format("h:mma"); // e.g. 7:00pm
	}

	return (
		<React.Fragment>
			<ActivityIndicator fullScreen active={!props}>
				Loading...
			</ActivityIndicator>

			{!!props && (
				<React.Fragment>
					<Section>
						<DefaultGrid>
							<Image src={props.image.url} />
						</DefaultGrid>

						<TextGroup>
							<Heading>{props.title}</Heading>

							<Paragraph>
								{[
									{
										icon: "calendar",
										prop: "date",
									},

									{
										icon: "clock",
										prop: "time",
									},
									{
										icon: "pin",
										prop: "address",
									},
								].map(({ icon, prop }) => (
									<div>
										<span
											style={{
												width: "30px",
												display: "inline-block",
											}}
										>
											<Icon
												type={icon}
												color={theme.color.muted}
											/>
										</span>
										<Caption
											large
											style={{ display: "inline-block" }}
										>
											{props[prop]}
										</Caption>
										<br />
									</div>
								))}
							</Paragraph>

							<PrismicRichText
								field={props.content}
								components={{
									heading2: ({ children }) => (
										<Subheading>{children}</Subheading>
									),
									heading3: ({ children }) => (
										<BlockQuote>{children}</BlockQuote>
									),
									list: ({ children }) => (
										<Paragraph>
											<ul>{children}</ul>
										</Paragraph>
									),
								}}
							/>
							<Button
								style={{ marginTop: "10px" }}
								icon="external"
								href={props.eventbrite_url.url}
								external
							>
								Reserve your spot on Eventbrite
							</Button>
						</TextGroup>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
