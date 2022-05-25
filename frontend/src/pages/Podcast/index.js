import Button from "../../components/Button";
import Feature from "../../components/Feature";
import Lattice from "../../components/Lattice";
import { Paragraph } from "../../components/Text";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";

export default () => (
	<React.Fragment>
		<Section explode>
			<Feature invert>
				<Feature.Title>An Interview with Andrew Sach</Feature.Title>
				<Feature.Image src={require("../../assets/andrew-sach.png")} />
				<Feature.Body>
					<Paragraph>
						We take small groups, families, church groups and others
						on walks and tours through some of the awesome London
						gospel stories.
					</Paragraph>
				</Feature.Body>
			</Feature>
		</Section>
		<Section deflate>
			<Strapline>
				On the Christian Heritage London podcast we meet Christian
				leaders who serve the church in the purpose, perspective and
				power of the gospel.
			</Strapline>
			<Button
				dropdown
				center
				options={{
					items: [
						{
							value: "Apple Podcasts",
							href: "https://podcasts.apple.com/gb/podcast/christian-heritage-london-podcast/id1232042916",
						},
						{
							value: "Spotify",
							href: "https://podcasts.apple.com/gb/podcast/christian-heritage-london-podcast/id1232042916",
						},
					],
				}}
			>
				Subscribe
			</Button>
		</Section>
		<Section explode>
			<Lattice panels={require("../../testData/podcasts").default} />
		</Section>
	</React.Fragment>
);
