import Button from "./Button";
import Feature from "./Feature";
import { Paragraph } from "./Text";
import React from "react";
import { RichText } from "prismic-reactjs";
import Section from "./Section";
import dayjs from "dayjs";
import ellipsize from "ellipsize";

export default ({ event }) => {
	return (
		<Section dark>
			<React.Fragment>
				<Feature invert>
					{/* <Feature.Header>
						Upcoming event:{" "}
						{dayjs(event.data.date_and_time).format(
							"h:mma[, ]D MMM"
						)}
					</Feature.Header> */}
					<Feature.Title>{event.data.title}</Feature.Title>
					<Feature.Image
						href={`/event/${event.uid}`}
						src={event.data.image.url}
					/>
					<Feature.Body style={{ marginBottom: "-15px" }}>
						<Paragraph>
							{ellipsize(
								RichText.asText(event.data.content),
								120
							)}
						</Paragraph>
						<Button href={`/event/${event.uid}`}>
							Find out more
						</Button>
					</Feature.Body>
				</Feature>
			</React.Fragment>
		</Section>
	);
};
