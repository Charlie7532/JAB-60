/** @format */

import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

// import { useNavigate } from 'react-router-dom';

const containerStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	height: '100vh', // Set the height of the container to the viewport height
};

export default function SuccessPage() {
	return (
		<Box sx={containerStyle}>
			<br />
			<Typography level="h1">Lo has logrado</Typography>
			<Typography level="title-lg">Hemos logrado desencriptar el codigo y encontramos la ubicacion de maveric</Typography>
			<br />
		</Box>
	);
}
