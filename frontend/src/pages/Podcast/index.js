import { Route, Switch, useHistory } from "react-router-dom";

import ActivityIndicator from "../../components/ActivityIndicator";
import Button from "../../components/Button";
import Episode from "./Episode";
import Feature from "../../components/Feature";
import Lattice from "../../components/Lattice";
import { Paragraph } from "../../components/Text";
import Podcast from "./Podcast";
import React from "react";
import Section from "../../components/Section";
import Strapline from "../../components/Strapline";
import VideoSpotlight from "../../components/VideoSpotlight";
import ellipsize from "ellipsize";
import getPodcast from "./getPodcast";

export default () => (
	<Switch>
		<Route exact path="/podcast" component={Podcast} />
		<Route path="/podcast/episode/:id" component={Episode} />
	</Switch>
);
