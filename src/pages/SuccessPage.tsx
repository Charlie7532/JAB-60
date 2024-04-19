/** @format */

import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
	return (
		<React.Fragment>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '80vh',
				}}>
				<br />
				<div style={{ textAlign: 'center' }}>
					<Typography level="h1">¡¡¡Operación Exitosa!!!</Typography>
					<br />
					<Typography level="title-lg">Hemos logrado desencriptar el código y encontramos la ubicación de Maverick.</Typography>
					<br />
					<Typography level="title-lg">23°26'06"N 75°47'51"W</Typography>
					<br />
					<Button component={Link} to="https://www.google.com/maps/place/23%C2%B026'06.0%22N+75%C2%B047'52.0%22W/@23.4351938,-75.8013552,16.5z/data=!4m4!3m3!8m2!3d23.435!4d-75.7977778?entry=ttu">
						Ver ubicación
					</Button>
				</div>
				<br />
			</Box>
		</React.Fragment>
	);
}
