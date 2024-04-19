/** @format */

import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/joy/IconButton';
import {  useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();
	const API_URL = 'https://script.google.com/macros/s/AKfycby9s08SjHMheOOY5WKJBry__o4S_OWNlyxdjBqAANRjaggrHlYvOcTg5Rj6zvV_m-Jp/exec';
	const [name, setName] = React.useState('');

	function handleFormSubmit() {
		// Perform any form validation here
		// If validation passes, send the GET request and navigate
		fetch(`${API_URL}?name=${name}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data); // You can handle the response data here
				navigate('/waiting-agents');
			})
			.catch((error) => {
				console.error('Error:', error);
				// Handle error here if needed
			});
	}

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
			<Typography level="h1">Hola Agente</Typography>
			<Typography level="title-lg">Ingresa con tu nombre clave</Typography>
			<br />
			<FormControl>
				<Input
					placeholder="Call to action"
					value={name}
					onChange={(e) => setName(e.target.value)}
					endDecorator={
						<IconButton onClick={handleFormSubmit} aria-label="Open in new tab" variant="solid" color="primary">
							<SendIcon />
						</IconButton>
					}
				/>
			</FormControl>
		</Box>
	);
}