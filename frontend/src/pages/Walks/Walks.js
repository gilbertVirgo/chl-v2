import "swiper/css";
import "swiper/css/autoplay";

import { CarouselImage, CarouselWrapper } from "./styles";
import { Heading, Paragraph, Subheading } from "../../components/Text";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Button from "../../components/Button";
import Feature from "../../components/Feature";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import React from "react";
import Section from "../../components/Section";
import Table from "../../components/Table";
import images from "./images";
import pricing from "./data/pricing";

export default () => (
	<React.Fragment>
		<Section dark>
			<Hero
				video="https://www.youtube.com/embed/iF2ozY92F9w?modestbranding=1"
				thumbnail={require("../../assets/thumbnail-test.jpg")}
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
				<Link to="/contact/private-tour">
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
							"Historic People",
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
