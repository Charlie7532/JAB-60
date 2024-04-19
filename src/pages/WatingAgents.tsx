/** @format */

import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();
	const [namesInfo, setNamesInfo] = React.useState({ totalNames: 0, namesList: [] });

	const expectedUsers = 20;

	const API_URL = 'https://script.google.com/macros/s/AKfycby9s08SjHMheOOY5WKJBry__o4S_OWNlyxdjBqAANRjaggrHlYvOcTg5Rj6zvV_m-Jp/exec';

	// Function to fetch data from the API and update state
	const fetchData = () => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setNamesInfo(data);
			})
			.catch((error) => {
				console.error('Error:', error);
				// Handle error here if needed
			});
	};

	React.useEffect(() => {
		// Initial fetch
		fetchData();

		// Fetch data every 30 seconds
		const intervalId = setInterval(fetchData, 30000);

		// Clean up interval
		return () => clearInterval(intervalId);
	}, []); // Empty dependency array ensures this effect runs only once on mount

	// Redirect if condition is met
	React.useEffect(() => {
		if (namesInfo.totalNames >= 20) {
			navigate('/console-connected');
		}
	}, [namesInfo.totalNames, navigate]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '80vh',
			}}>
			<br />
			<Typography level="h1">Agentes conectados</Typography>
			<Typography level="h1">
				{namesInfo.totalNames}/{expectedUsers}
			</Typography>
			<br />
			<CircularProgress color="primary" size="lg" />
		</Box>
	);
}
