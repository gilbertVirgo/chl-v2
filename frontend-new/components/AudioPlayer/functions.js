export const qualifyXValue = ({ clientX: x, barWrapper, handle }) => {
	const { current: b } = barWrapper,
		{ current: h } = handle,
		width = b.offsetWidth - h.offsetWidth;

	x -= b.offsetLeft + h.offsetWidth / 2;
	if (x > width) x = width;
	else if (x < 0) x = 0;

	return x;
};

export const calculateCurrentTime = ({
	clientX: x,
	handle,
	audio,
	barWrapper,
}) => {
	const { current: b } = barWrapper,
		{ current: h } = handle,
		{ duration } = audio.current,
		progress =
			((x - h.offsetWidth / 2 - b.offsetLeft) * 100) /
			(b.offsetWidth - h.offsetWidth);

	return Math.ceil(duration * (progress / 100));
};

export const calculateXValue = ({
	audio: { currentTime, duration },
	barWrapper,
	handle,
}) => {
	const { current: b } = barWrapper,
		{ current: h } = handle,
		width = b.offsetWidth - h.offsetWidth,
		progress = (currentTime * 100) / duration;

	return width * (progress / 100);
};
