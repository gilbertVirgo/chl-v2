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
import { useLocation } from "react-router-dom";

export default () => {
	const [drawerOpen, setDrawerOpen] = React.useState(true);
	const location = useLocation();

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
					<Link key={`link-${index}`} to={href}>
						{title}
					</Link>
				)
			)}
			<Link donate="true" to="/donate">
				<Button>Donate</Button>
			</Link>
		</React.Fragment>
	);

	React.useEffect(() => {
		setDrawerOpen(false);
	}, [location]);

	return (
		<React.Fragment>
			{!location.pathname.includes("walks") && <WalksCTA />}
			<Wrapper>
				<Grid
					style={{
						alignItems: "center",
						maxWidth: "1125px",
						margin: "0 auto",
					}}
				>
					<Logo to="/" />
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
