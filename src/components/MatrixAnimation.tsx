/** @format */

import * as React from 'react';
import './MatrixAnimation.css'; // Import CSS file for styling

const MatrixAnimation = () => {
	const [matrixText, setMatrixText] = React.useState('');

	// Function to generate a random character
	const getRandomChar = () => {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const randomIndex = Math.floor(Math.random() * characters.length);
		return characters.charAt(randomIndex);
	};

	// Function to generate a random string of characters
	const generateMatrixString = (length: number, lines: number) => {
		let result = '';
		for (let i = 0; i < lines; i++) {
			for (let j = 0; j < length; j++) {
				result += getRandomChar();
			}
			result += '\n'; // Add newline character after each line
		}
		return result;
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			setMatrixText(generateMatrixString(50, 20)); // Adjust the length and lines as needed
		}, 50); // Adjust the interval duration for speed

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, []);

	return (
		<div className="matrix-animation-container">
			<div className="matrix-text-container">
				<pre className="matrix-text">{matrixText}</pre>
			</div>
		</div>
	);
};

export default MatrixAnimation;
