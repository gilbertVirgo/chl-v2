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
import theme from "../../theme";

export default () => (
	<React.Fragment>
		<Section dark>
			<Hero
				video="https://www.youtube.com/embed/iF2ozY92F9w?modestbranding=1"
				thumbnail={require("../../assets/thumbnail-test.jpg")}
			>
				<Heading>Guided Walks</Heading>
				<Paragraph>
					Christian Heritage London take people on walks to display
					some of the wonderful gospel history that can be found in
					London.
				</Paragraph>
			</Hero>
		</Section>
		<Section skinny>
			<Heading>Book a walk</Heading>
			<Paragraph>
				We give guided walks through London&apos;s church history and
				the British Museum to groups as small as four people.
			</Paragraph>
			<br />
			<Button
				href="https://bookings.christianheritagelondon.org"
				theme="red"
				suspend
			>
				Book a walk
			</Button>
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
			<Heading>Other walks</Heading>
			<Paragraph>
				Our other London walks include:
				<ul>
					<li>
						The Gospel in Art, in the{" "}
						<strong>National Gallery</strong>
					</li>
					<li>
						The Influence of Christianity on the West in{" "}
						<strong>the V&amp;A</strong>
					</li>
				</ul>
			</Paragraph>
			<Paragraph>
				If you would like to apply for one of these, please{" "}
				<a href="/contact/other-tours">get in touch</a>.
			</Paragraph>
		</Section>
		<Section skinny>
			<Heading>Tours outside London</Heading>
			<Subheading>
				The gospel has also made huge impact on the world in the cities
				of Oxford and Cambridge.
			</Subheading>
			<Paragraph>
				If you’d like to book a C.S. Lewis tour of Oxford — including
				the Kilns, Holy Trinity Church, Magdalen College, and many other
				fascinating sights — we’d be delighted to arrange it for you.
			</Paragraph>
			<br />
			<Paragraph>
				We also offer a day tour of Cambridge University, featuring a
				Christian Heritage walk exploring the lives of William
				Wilberforce, Charles Simeon, and others, together with punting
				and Evensong at King’s College Chapel.
			</Paragraph>
			<br />
			<Button
				href="https://national.christianheritagelondon.org"
				theme="red"
				suspend
			>
				Request an Oxford or Cambridge tour
			</Button>
		</Section>
		<Section outerStyle={{ overflowX: "scroll" }}>
			<Heading>Pricing outline</Heading>

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
							"Cost (per person)",
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
			<br />
			{/* <Paragraph>
        <em>
          <span style={{ color: theme.color.red }}>*</span> An additional £5 on
          Saturdays
        </em>*/}
			<Paragraph>
				<em>
					<sup style={{ color: theme.color.red }}>*</sup> Bookable for
					groups of 10 or larger
				</em>
			</Paragraph>
		</Section>
	</React.Fragment>
);
