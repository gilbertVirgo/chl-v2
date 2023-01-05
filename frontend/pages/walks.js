import "swiper/css";
import "swiper/css/autoplay";

import Section from "../components/Section";
import styled from "styled-components";

export const CarouselWrapper = styled(Section)`
	.swiper-slide {
		height: auto;
	}
	.swiper-container {
		img {
			height: 300px; // Guessed
		}
	}
`;

export const CarouselImage = styled.div`
	background-image: url("${({ src }) => src}");
	background-size: cover;
	width: 100%;
	padding-bottom: calc(100% / (16 / 9));
	background-repeat: no-repeat;
`;

import { Heading, Paragraph, Subheading } from "../components/Text";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Link from "next/link";
import React from "react";
import Section from "../components/Section";
import Table from "../components/Table";

const pricing = [
	{
		title: "London Day",
		historicPeople: (
			<>
				<strong>City</strong>: William Wilberforce, John Wyclif, John
				Wesley, William Tyndale, George Whitefield, Thomas Watson, Lord
				Shaftesbury, John Newton.
				<br />
				<strong>British Museum</strong>: Abraham, Hezekiah, Isaiah,
				Jehu, Elijah, Daniel, Esther, Nehemiah, Paul.
			</>
		),
		locations: `City of London: St Paul’s Cathedral, Paul’s Cross, Cheapside, One New Change, St Mary le Bow, Bow Lane, Watling Street, St Stephen Walbrook, Mansion House, Bank of England, St Mary Woolnoth.
        British Museum.`,
		duration: `Two hours and two hours, with a two hour break for lunch and travel.`,
		cost: "£25",
	},
	{
		title: "City Walk",
		historicPeople: `William Wilberforce, John Wyclif, John Wesley, William Tyndale, George Whitefield, Thomas Watson, Lord Shaftesbury, John Newton.`,
		locations: `City of London, St Paul’s Cathedral, Paul’s Cross, Cheapside, One New Change, St Mary le Bow, Bow Lane, Watling Street, St Stephen Walbrook, Mansion House, Bank of England, St Mary Woolnoth.`,
		duration: "Two hours",
		cost: "£15",
	},
	{
		title: `British Museum`,
		historicPeople: `Abraham, Hezekiah, Isaiah, Jehu, Elijah, Daniel, Esther, Nehemiah, Paul.`,
		locations: `The British Museum `,
		duration: `Two hours`,
		cost: "£15",
	},
	{
		title: `City Day`,
		historicPeople: `William Wilberforce, John Wyclif, John Wesley, William Tyndale, George Whitefield, Thomas Watson, Lord Shaftesbury, John Newton, Thomas Cranmer, Nicholas Ridley, Hugh Latimer, John Owen, Charles Spurgeon, Richard Baxter, Charles Wesley, Rahere, the Smithfield Martyrs, John Bunyan, Elizabeth Fry.`,
		locations: `City of London: St Paul’s Cathedral, Paul’s Cross, Cheapside, One New Change, St Mary le Bow, Bow Lane, Watling Street, St Stephen Walbrook, Mansion House, Bank of England, St Mary Woolnoth, Royal Exchange, Coleman Street, Guildhall, St Mary Aldermanbury (site of), London Wall, Museum of London, Cloth Fair, St Bartholomew the Great, Smithfield, Snow Fair, St Sepulchre.`,
		duration: `Two hours and two hours, with a two hour break for lunch and travel.`,
		cost: "£25",
	},
	{
		title: `Westminster Walk`,
		historicPeople: `D. Martyn Lloyd-Jones, John Wesley, George Whitefield, Lord Shaftesbury, George Herbert, William Wilberforce, William Tyndale`,
		locations: `Westminster Chapel, Westminster Central Hall, Westminster Abbey, Parliament Square, St Margaret’s Westminster, Westminster School, Old Palace Yard, `,
		duration: `Two hours`,
		cost: "£15",
	},
];

const images = [
	`/assets/walks/1.jpg`,
	`/assets/walks/2.jpg`,
	`/assets/walks/3.jpg`,
	`/assets/walks/4.jpg`,
	`/assets/walks/5.jpg`,
	`/assets/walks/6.jpg`,
	`/assets/walks/7.jpg`,
	`/assets/walks/8.jpg`,
	`/assets/walks/9.jpg`,
];

export default () => (
	<React.Fragment>
		<Section dark>
			<Hero
				video="https://www.youtube.com/embed/iF2ozY92F9w?modestbranding=1"
				thumbnail={"/assets/thumbnail-test.jpg"}
			>
				<Heading>Walks &amp; Tours</Heading>
				<Paragraph>
					Christian Heritage London take people on walks to display
					some of the wonderful gospel history that can be found in
					London.
				</Paragraph>
			</Hero>
		</Section>
		<Section skinny>
			<Heading>London Day</Heading>
			<Paragraph>
				There&apos;s amazing church history in the City of London with
				sites associated with Wilberforce, Tyndale, Wesley, Whitefield,
				Elizabeth Fry, John Newton and many others. Meanwhile in the
				British Museum there are items associated with Abraham,
				Hezekiah, Daniel, Esther, Nehemiah, Paul and others.
				<br />
				<br />A <strong>London Day</strong> includes a tour of the{" "}
				<strong>British Museum</strong> and a guided walk in the{" "}
				<strong>City of London</strong>.
			</Paragraph>
			<Paragraph>
				We give walking tours through London&apos;s church history and
				the British Museum to groups as small as four people.
			</Paragraph>

			<Button href="/walks/apply" theme="red" suspend>
				Request a London Day
			</Button>
			<br />
			<Paragraph small>
				Private tours are also available.{" "}
				<Link href="/contact/private-tour">
					Enquire about a private tour
				</Link>
				.
			</Paragraph>
		</Section>
		<CarouselWrapper span>
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				spaceBetween={15}
				draggable={false}
				allowTouchMove={false}
				speed={1000}
				freeMode={{ momentum: false, enabled: true }}
				slidesPerView="auto"
				centeredSlides
				loop
			>
				{images.map((src, index) => (
					<SwiperSlide
						style={{ width: "500px" }}
						key={`swiper-slide-${index}`}
					>
						<CarouselImage src={src} width="100%" />
					</SwiperSlide>
				))}
			</Swiper>
		</CarouselWrapper>
		<Section skinny>
			<Heading>Other Tours</Heading>
			<Paragraph>
				Our other tours include:
				<ul>
					<li>
						The Gospel in Art, in the{" "}
						<strong>National Gallery</strong>
					</li>
					<li>
						The Influence of Christianity on the West in{" "}
						<strong>the V&amp;A</strong>
					</li>
					<li>Westminster tour</li>
					<li>City day</li>
				</ul>
			</Paragraph>
			<Paragraph>
				If you would like to apply for one of these, or if you would
				like only a City Walk or a British Museum tour, or if you have
				any other questions please{" "}
				<a href="/contact/other-tours">get in touch</a>.
			</Paragraph>
			{/* <Paragraph>
				Email us at{" "}
				<a href="mailto:info@christianheritagelondon.org">
					info@christianheritagelondon.org
				</a>
				.
			</Paragraph> */}
		</Section>
		<Section skinny>
			<Heading>Guided Walks Outside London</Heading>
			<Subheading>
				The gospel has also made huge impact on the world in the cities
				of Oxford and Cambridge.
			</Subheading>
			<Paragraph>
				The Reformation, revivals, the missionary movement, the
				translation of the bible, martyrdoms and other extraordinary
				events in the lives of William Tyndale, John Owen, Hugh Latimer,
				Thomas Cranmer, C S Lewis and many others have happened in these
				cities.
			</Paragraph>
			<Paragraph>
				We give day tours for groups in Oxford and in Cambridge. For
				information please{" "}
				<a href="/contact/other-tours">get in touch</a>.
			</Paragraph>
			<Paragraph>
				We also give{" "}
				<a href="/international-tours">International Tours</a> for
				churches, schools, universities and other larger groups.
			</Paragraph>
		</Section>
		<Section outerStyle={{ overflowX: "scroll" }}>
			<Heading>Pricing Outline</Heading>
			{/* borderRight: couldn't do this with padding or margin. This was the only fix. */}
			<Table
				style={{
					minWidth: "1200px",
				}}
			>
				<thead>
					<tr>
						{[
							"",
							"Historical Characters",
							"Locations",
							"Duration",
							"Cost",
						].map((text) => (
							<td>
								<Subheading>{text}</Subheading>
							</td>
						))}
					</tr>
				</thead>
				<tbody>
					{pricing.map((row) => (
						<tr>
							{Object.keys(row).map((key) => (
								<td>
									{key === "title" ? (
										<Subheading>{row[key]}</Subheading>
									) : (
										<Paragraph>{row[key]}</Paragraph>
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</Table>
		</Section>
	</React.Fragment>
);
