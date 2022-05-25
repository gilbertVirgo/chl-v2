import { ButtonTemplate, ButtonWrapper, DropdownLeaf, Icon } from "./styles";

import { Paragraph } from "../Text";
import React from "react";

export default ({
	center,
	dropdown,
	options,
	external,
	children,
	href,
	...props
}) => {
	const [active, setActive] = React.useState(false);

	const ref = React.useRef(Math.floor(Math.random() * 99999));

	const deactivate = function (event) {
		console.log("EVENT", event);

		const { target } = event;

		console.log([target.dataset.ref, ref.current]);

		if (target.dataset.ref != ref.current) {
			setActive(false);
			window.removeEventListener("click", this);
		}
	};

	const handleClick = async () => {
		if (active) {
			setActive(false);
		} else {
			window.addEventListener("click", deactivate);
			setActive(true);
		}
	};

	return (
		<ButtonWrapper center={center}>
			<a target="_blank" href={href}>
				<ButtonTemplate
					data-ref={ref.current}
					{...props}
					onClick={handleClick}
				>
					{external && <Icon.External />}
					{children} {dropdown && <Icon.Chevron />}
				</ButtonTemplate>
			</a>
			{dropdown && (
				<DropdownLeaf data-ref={ref.current} active={active}>
					{options.items.map(({ value, href }) => (
						<Paragraph as="li">
							{href ? (
								<a target="_blank" href={href}>
									{value}
								</a>
							) : (
								value
							)}
						</Paragraph>
					))}
				</DropdownLeaf>
			)}
		</ButtonWrapper>
	);
};
