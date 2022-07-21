import {
	Bar,
	BarWrapper,
	CompletedBar,
	CurrentTime,
	Duration,
	Forward,
	Handle,
	Play,
	Rewind,
	Wrapper,
} from "./styles";
import {
	calculateCurrentTime,
	calculateXValue,
	qualifyXValue,
} from "./functions";

import ActivityIndicator from "../ActivityIndicator";
import React from "react";
import format from "format-duration";

export default ({ src }) => {
	const mounted = React.useRef(false),
		handle = React.useRef(),
		completedBar = React.useRef(),
		barWrapper = React.useRef(),
		audio = React.useRef(),
		[isPaused, setIsPaused] = React.useState(true),
		[canPlay, setCanPlay] = React.useState(false),
		[currentTime, setCurrentTime] = React.useState(0);

	const handleRewind = () => {
		if (audio.current.currentTime > 15) audio.current.currentTime -= 15;
		else audio.current.currentTime = 0;
	};

	const handleForward = () => {
		if (audio.current.duration - audio.current.currentTime > 30)
			audio.current.currentTime += 30;
		else audio.current.currentTime = audio.current.duration;
	};

	React.useEffect(() => {
		if (isPaused) audio.current.pause();
		else audio.current.play();
	}, [isPaused]);

	React.useEffect(() => {
		mounted.current = true;

		return () => {
			mounted.current = false;
		};
	}, []);

	React.useEffect(() => {
		if (canPlay) {
			let isDragging = false;

			function paint(x) {
				handle.current.style.transform = `translateX(${x}px)`;
				completedBar.current.style.width = `${x}px`;
			}

			function setDragging({ type, target }, value) {
				isDragging = value;
				document.body.style.cursor = !!value ? "grabbing" : "default";

				if (!mounted.current) target.removeEventListener(type, this);
			}

			function handleMove({ clientX, target }) {
				if (isDragging && handle.current) {
					let x = qualifyXValue({ clientX, barWrapper, handle });

					paint(x);

					audio.current.currentTime = calculateCurrentTime({
						clientX,
						handle,
						barWrapper,
						audio,
					});
				}

				if (!mounted.current)
					target.removeEventListener("pointermove", this);
			}

			(function updatePlayhead() {
				if (handle.current && barWrapper.current) {
					if (!isDragging) {
						paint(
							calculateXValue({
								audio: audio.current,
								handle,
								barWrapper,
							})
						);

						setCurrentTime(audio.current.currentTime);
					}
				}

				if (mounted.current) {
					// Updates 4 times a second.
					setTimeout(updatePlayhead, 250);
				}
			})();

			if (handle.current) {
				handle.current.addEventListener("pointerdown", (event) =>
					setDragging(event, true)
				);
				window.addEventListener("pointerup", (event) =>
					setDragging(event, false)
				);
				window.addEventListener("blur", (event) =>
					setDragging(event, false)
				);
				window.addEventListener("pointermove", handleMove);
			}
		}
	}, [canPlay]);

	return (
		<Wrapper>
			<audio ref={audio} onLoadedMetadata={() => setCanPlay(true)} hidden>
				<source src={src} type="audio/mpeg" />
			</audio>

			{canPlay ? (
				<React.Fragment>
					<BarWrapper ref={barWrapper}>
						<Bar />
						<CompletedBar ref={completedBar} />
						<Handle ref={handle} />
					</BarWrapper>
					<CurrentTime>{format(currentTime * 1000)}</CurrentTime>{" "}
					<Duration>{format(audio.current.duration * 1000)}</Duration>
					<Rewind onPointerDown={handleRewind} />
					<Play
						paused={isPaused}
						onPointerDown={() => setIsPaused(!isPaused)}
					/>
					<Forward onPointerDown={handleForward} />
				</React.Fragment>
			) : (
				<ActivityIndicator>Loading player...</ActivityIndicator>
			)}
		</Wrapper>
	);
};
