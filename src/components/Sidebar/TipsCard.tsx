/** @format */

import React, { useState, useEffect } from 'react';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LinearProgress from '@mui/joy/LinearProgress';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const TipsArray = [
	{ header: 'Did you know?', content: 'The first computer virus was created in 1983 and was called the "Elk Cloner" virus.' },
	{ header: 'Fun Fact', content: 'The average computer user blinks 7 times a minute, less than half the normal rate of 20.' },
	{ header: 'Tech Trivia', content: 'The first computer mouse was invented in 1964 by Douglas Engelbart and was made of wood.' },
	{ header: 'Interesting Fact', content: 'The term "bug" to describe a computer glitch originated in 1947 when a moth caused a problem in the Harvard Mark II computer.' },
	{ header: 'Did you know?', content: 'The first electronic digital computer, ENIAC, weighed more than 27 tons and took up 1800 square feet of space.' },
	{ header: 'Tech Trivia', content: 'The QWERTY keyboard layout was designed in the 1870s to prevent typewriter keys from jamming.' },
	{ header: 'Fun Fact', content: 'The first domain name ever registered was symbolics.com on March 15, 1985.' },
	{ header: 'Did you know?', content: 'The Apollo 11 guidance computer, which landed the first humans on the moon, had less processing power than a modern smartphone.' },
	{ header: 'Tech Trivia', content: 'The first webcam was created in 1991 at the University of Cambridge to monitor a coffee pot.' },
	{ header: 'Interesting Fact', content: 'The first mobile phone call was made in 1973 by Martin Cooper, a Motorola researcher, using a prototype of the Motorola DynaTAC 8000X.' },
];
const LOADING_TIME_SECONDS = 20; // Change this constant to modify loading time
const INCREMENT_PERCENTAGE = 0.1; // Change this constant to modify increment percentage

const TipsCard: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [tipIndex, setTipIndex] = useState(Math.floor(Math.random() * TipsArray.length)); // Initialize with a random tip index
	const [progress, setProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		const totalIncrements = 100 / INCREMENT_PERCENTAGE;
		const interval = (LOADING_TIME_SECONDS * 1000) / totalIncrements; // Calculate interval based on loading time
		let progressTimer: NodeJS.Timeout;

		if (isPlaying) {
			progressTimer = setInterval(() => {
				if (progress < 100) {
					setProgress(progress + INCREMENT_PERCENTAGE);
				} else {
					// Change tip when progress reaches 100%
					const newIndex = (tipIndex + 1) % TipsArray.length;
					setTipIndex(newIndex);
					setProgress(0);
				}
			}, interval);
		}

		return () => clearInterval(progressTimer); // Clean up progress timer
	}, [progress, tipIndex, isPlaying]);

	const handleClose = () => {
		setIsVisible(false);
	};

	const handleNextTip = () => {
		const newIndex = (tipIndex + 1) % TipsArray.length;
		setTipIndex(newIndex);
		setProgress(0);
	};

	const handlePreviousTip = () => {
		const newIndex = tipIndex === 0 ? TipsArray.length - 1 : tipIndex - 1;
		setTipIndex(newIndex);
		setProgress(0);
	};

	const handleTogglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const tip = TipsArray[tipIndex];

	return (
		<React.Fragment>
			{isVisible && (
				<Card invertedColors variant="solid" color="primary" sx={{ boxShadow: 'none' }}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography level="title-sm">{tip.header}</Typography>
						<IconButton size="sm" onClick={handleClose}>
							<CloseRoundedIcon />
						</IconButton>
					</Stack>
					<Typography level="body-sm">{tip.content}</Typography>
					<ButtonGroup
						variant="plain"
						aria-label="plain button group"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
							'& > .MuiButton-root': {
								// Adjust specificity to target the Button component
								width: '100%',
								borderRadius: '0',
								'&:first-of-type': {
									// Change ':first-child' to ':first-of-type'
									borderTopLeftRadius: '10px',
									borderBottomLeftRadius: '10px',
								},
								'&:last-of-type': {
									// Change ':last-child' to ':last-of-type'
									borderTopRightRadius: '10px',
									borderBottomRightRadius: '10px',
								},
							},
						}}>
						<Button onClick={handlePreviousTip}>
							<SkipPreviousIcon />
						</Button>
						<Button onClick={handleTogglePlay}>{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}</Button>
						<Button onClick={handleNextTip}>
							<SkipNextIcon />
						</Button>
					</ButtonGroup>
					<LinearProgress variant="outlined" determinate value={progress} sx={{ my: 1 }} />
				</Card>
			)}
		</React.Fragment>
	);
};

export default TipsCard;
