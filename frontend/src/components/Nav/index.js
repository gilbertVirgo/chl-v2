import { Drawer, Link, LinkList, Logo, Padding, Wrapper } from "./styles";
import { ShowOnLargeScreens, ShowOnSmallScreens } from "..";

import Burger from "./Burger";
import Button from "../Button";
import Grid from "../Grid";
import Headroom from "react-headroom";
import React from "react";
import links from "./links";

export default () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const handleBurgerClicked = () => {
		setDrawerOpen(!drawerOpen);
	};

	const linkList = (
		<LinkList>
			{links.map(({ title, href }) => (
				<Link to={href}>{title}</Link>
			))}
			<Link to="/donate">
				<Button>Donate</Button>
			</Link>
		</LinkList>
	);

	return (
		// <Headroom
		// 	upTolerance={drawerOpen ? Infinity : 0}
		// 	downTolerance={drawerOpen ? Infinity : 0}
		// >
		<React.Fragment>
			<Wrapper>
				<Grid>
					<Logo />
					<Burger active={drawerOpen} onClick={handleBurgerClicked} />
					<Drawer open={drawerOpen}>{linkList}</Drawer>
					<ShowOnLargeScreens>{linkList}</ShowOnLargeScreens>
				</Grid>
			</Wrapper>
			<Padding />
		</React.Fragment>
		// </Headroom>
	);
};
