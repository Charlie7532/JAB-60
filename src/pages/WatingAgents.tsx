/** @format */
import * as React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';

import { useNavigate } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';

interface NameInfo {
	id: string;
	name: string;
	timeStamp: string; // Or whatever type timeStamp should be
}

export default function Home() {
	const navigate = useNavigate();
	const [namesInfo, setNamesInfo] = React.useState<{ totalNames: number; namesList: NameInfo[] }>({ totalNames: 0, namesList: [] });

	const expectedUsers = 20;

	const API_URL = 'https://script.google.com/macros/s/AKfycbwo4IoIjuzCeoagCc3mN-QHDYfTwv7brykZoBkJ71TX-k0VeMQRsDiEpk91XQM_DZk4/exec';

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
		const intervalId = setInterval(fetchData, 1000);

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
			<br />
			<CircularProgress color="primary" size="lg" />
			<br />
			<br />
			<Sheet sx={{ height: 300, overflow: 'auto' }}>
				<Table stickyHeader>
					<thead>
						<tr>
							<th style={{ width: '15%' }}>Id</th>
							<th>Nombre Clave</th>
							<th style={{ width: '40%' }}>Time Stamps</th>
						</tr>
					</thead>
					<tbody>
						{namesInfo.namesList.map((row) => (
							<tr key={row.id}>
								<td>{row.id}</td>
								<td>{row.name}</td>
								<td>{row.timeStamp}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Sheet>
		</Box>
	);
}
