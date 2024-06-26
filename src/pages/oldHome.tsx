/** @format */

import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/joy/IconButton';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();
	const API_URL = 'https://script.google.com/macros/s/AKfycbwo4IoIjuzCeoagCc3mN-QHDYfTwv7brykZoBkJ71TX-k0VeMQRsDiEpk91XQM_DZk4/exec';
	const [name, setName] = React.useState('');
	const [requestStatus, setRequest] = React.useState(true);

	function handleFormSubmit() {
		setRequest(false);
		if (requestStatus) {
			fetch(`${API_URL}?name=${name}`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data); // You can handle the response data here
					navigate('/waiting-agents');
				})
				.catch((error) => {
					setRequest(true);
					console.error('Error:', error);
					// Handle error here if needed
				});
		}
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
			<div style={{ textAlign: 'center', padding: '25px' }}>
				<br />
				<Typography level="h1">Hola Agente</Typography>
				<Typography level="title-lg">Ingresa tu nombre para iniciar el proceso de desencriptación</Typography>

				<br />
				<FormControl sx={{ width: '100%' }}>
					<Input
						placeholder="Nombre..."
						value={name}
						onChange={(e) => setName(e.target.value)}
						sx={{ borderRadius: '9999px', height: '50px', paddingRight: '0.55rem' }}
						endDecorator={
							<IconButton
								loading={!requestStatus}
								type="submit"
								onClick={handleFormSubmit}
								aria-label="Open in new tab"
								variant="solid"
								color="primary"
								sx={{ width: '70px', height: '50px', borderRadius: '0 90px 90px 0' }}>
								<SendIcon />
							</IconButton>
						}
					/>
				</FormControl>
			</div>
		</Box>
	);
}
