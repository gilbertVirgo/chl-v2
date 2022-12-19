import { Heading, Paragraph } from "../../components/Text";

import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Lattice from "../../components/Lattice";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";
import tours from "./tours";

export default () => (
	<React.Fragment>
		{/* <Section dark>
			<Hero>
				<Heading>International Tours</Heading>
				<Paragraph>
					When people talk about how the gospel can change the world
					they start talking about what God has done in London.
				</Paragraph>
			</Hero>
		</Section> */}
		<Section skinny>
			<Heading>International Tours</Heading>
			<Paragraph>
				The gospel of Jesus Christ is not advice, instructions or a
				philosophy, it&apos;s an announcement. It&apos;s the news that
				the living God has come, has lived with people in their sadness,
				weakness and rebellion and that he has come here{" "}
				<em>so that he can save</em>.
			</Paragraph>
			<br />
			<Paragraph>
				This is a historical fact. That historical event happened in a
				physical place—it isn&apos;t just a matter of opinion—and the
				event has changed the world.
			</Paragraph>
			<br />
			<Paragraph>
				Christian Heritage London gives tours through the places where
				Jesus Christ walked, where the Bible was written, where church
				history happened, where the Reformation broke out, where
				revivals changed nations—in Israel, Greece, Germany,
				Switzerland, France, Ireland and Britain. These tours are given
				to groups and are arranged on a bespoke basis. Get in touch to
				make enquiries and to arrange bookings.
			</Paragraph>
			<br />

			<Button href="/contact/international-tours" theme="red" suspend>
				Enquire
			</Button>
		</Section>
		<Section>
			<Lattice squares panels={tours} />
		</Section>
	</React.Fragment>
);
