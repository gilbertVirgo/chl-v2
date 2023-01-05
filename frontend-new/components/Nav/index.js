import {
	Drawer,
	ExternalLink,
	Link,
	LinkGroup,
	Logo,
	Padding,
	Wrapper,
} from "./styles";

import Burger from "./Burger";
import Button from "../Button";
import Grid from "../Grid";
import { Icon } from "../Button/styles";
import React from "react";
import WalksCTA from "./WalksCTA";
import links from "./links";
import theme from "../../theme";
import { useRouter } from "next/router";

export default () => {
	const [drawerOpen, setDrawerOpen] = React.useState(true);

	const handleBurgerClicked = () => {
		setDrawerOpen(!drawerOpen);
	};

	const listOfLinks = (
		<React.Fragment>
			{links.map(({ title, href, external }, index) =>
				external ? (
					<ExternalLink
						target="_blank"
						href={href}
						key={`external-link-${index}`}
					>
						<Icon
							type="external"
							style={{
								backgroundColor: theme.color.dark,
								marginRight: "8px",
							}}
						/>
						{title}
					</ExternalLink>
				) : (
					<Link key={`link-${index}`} href={href}>
						{title}
					</Link>
				)
			)}
			<Link donate="true" href="/donate">
				<Button>Donate</Button>
			</Link>
		</React.Fragment>
	);

	const router = useRouter();

	return (
		<React.Fragment>
			{!router.pathname.includes("walks") && <WalksCTA />}
			<Wrapper>
				<Grid
					style={{
						alignItems: "center",
						maxWidth: "1125px",
						margin: "0 auto",
					}}
				>
					<Logo href="/" />
					<Burger
						active={drawerOpen}
						onPointerDown={handleBurgerClicked}
					/>
					<Drawer open={drawerOpen}>
						<LinkGroup.SmallScreen>
							{listOfLinks}
						</LinkGroup.SmallScreen>
					</Drawer>
					<LinkGroup.LargeScreen>{listOfLinks}</LinkGroup.LargeScreen>
				</Grid>
			</Wrapper>
		</React.Fragment>
	);
};
