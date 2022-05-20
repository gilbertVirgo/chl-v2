import { Drawer, Link, LinkGroup, Logo, Padding, Wrapper } from "./styles";

import Burger from "./Burger";
import Button from "../Button";
import Grid from "../Grid";
import React from "react";
import links from "./links";

export default () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const handleBurgerClicked = () => {
		setDrawerOpen(!drawerOpen);
	};

	const listOfLinks = (
		<React.Fragment>
			{links.map(({ title, href }) => (
				<Link to={href}>{title}</Link>
			))}
			<Link to="/donate">
				<Button>Donate</Button>
			</Link>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<Wrapper>
				<Grid
					style={{
						alignItems: "center",
						maxWidth: "1125px",
						margin: "0 auto",
					}}
				>
					<Logo to="/" />
					<Burger active={drawerOpen} onClick={handleBurgerClicked} />
					<Drawer open={drawerOpen}>
						<LinkGroup.SmallScreen>
							{listOfLinks}
						</LinkGroup.SmallScreen>
					</Drawer>
					<LinkGroup.LargeScreen>{listOfLinks}</LinkGroup.LargeScreen>
				</Grid>
			</Wrapper>
			<Padding />
		</React.Fragment>
	);
};
