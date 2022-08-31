import Section from "../../components/Section";
import styled from "styled-components";

export const CarouselWrapper = styled(Section)`
	.swiper-slide {
		height: auto;
	}
	.swiper-container {
		img {
			height: ;
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
