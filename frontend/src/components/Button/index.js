import { ButtonTemplate, ButtonWrapper, DropdownLeaf, Icon } from "./styles";

import { Paragraph } from "../Text";
import React from "react";

export default ({
	center,
	dropdown,
	options,
	icon,
	external,
	children,
	href,
	...props
}) => {
	const [active, setActive] = React.useState(false);

	const ref = React.useRef(Math.floor(Math.random() * 99999));

	const deactivate = function (event) {
		const { target } = event;

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
			<a
				target={external ? "_blank" : null}
				style={{ textDecoration: "none" }}
				href={href}
			>
				<ButtonTemplate
					data-ref={ref.current}
					{...props}
					onPointerDown={handleClick}
				>
					{icon && <Icon type={icon} />}
					{children} {dropdown && <Icon type="chevron" />}
				</ButtonTemplate>
			</a>
			{dropdown && (
				<DropdownLeaf data-ref={ref.current} active={active}>
					{options.items.map(({ value, href }, index) => (
						<Paragraph as="li" key={`option-${index}`}>
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
