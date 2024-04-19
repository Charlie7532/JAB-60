/** @format */

import * as React from 'react';
import * as Main from '../components/MainWrapper';

// Joy components
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';

import MatrixText from '../components/MatrixAnimation';

function HomeTap0() {
	return (
		<Box sx={{ flex: 1, width: '100%' }}>
			<Stack
				spacing={4}
				sx={{
					display: 'flex',
					mx: 'auto',
					px: { xs: 2, md: 6 },
					py: { xs: 2, md: 3 },
				}}>
				<Stack id="3-header-cards" direction="row">
					<Card
						sx={{
							width: '32%',
							height: '100px',
						}}></Card>
					<Card
						sx={{
							width: '32%',
							height: '100px',
							mx: 'auto',
						}}></Card>
					<Card
						sx={{
							width: '32%',
							height: '100px',
						}}></Card>
				</Stack>

				<Grid container spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
					<Grid xs={12} sm={12} md={6}>
						<Card>
							<Box sx={{ mb: 1 }}>
								<Typography level="title-md">Tip</Typography>
								<Typography level="body-sm">You can add new equipments and create new Machines by selecting the + icon </Typography>
							</Box>
						</Card>
					</Grid>

					<Grid xs={12} sm={12} md={6}>
						<Card>
							<Box sx={{ mb: 1 }}>
								<Typography level="title-md">Tip</Typography>
								<Typography level="body-sm">You can add new equipments and create new Machines by selecting the + icon </Typography>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Stack>
		</Box>
	);
}

export default function Home() {

	return (
		<React.Fragment>
			<Main.MainHeader>Hi Welcome back</Main.MainHeader>
			<Main.MTabs defaultValue={'home'}>
				<Main.MTabList>
					<Main.MTab value={'home'}>Home</Main.MTab>
					<Main.MTab value={'dashboard'}>Dashboard</Main.MTab>
					<Main.MTab value={'projects'}>Projects</Main.MTab>
				</Main.MTabList>
				<Main.MTabPanel value={'home'}>
					<HomeTap0 />
				</Main.MTabPanel>
				<Main.MTabPanel value={'dashboard'}>
					<h1>Dashboard</h1>
					{/* <h2>Get ready for something amazing!</h2> */}
					{/* <p>While this space is still under construction, rest assured that something truly spectacular is on the way. Stay tuned for updates..</p> */}
					<MatrixText />
				</Main.MTabPanel>
				<Main.MTabPanel value={'projects'}>
					<h1>Projects</h1>
					<h2>Get ready for something amazing!</h2>
					<p>While this space is still under construction, rest assured that something truly spectacular is on the way. Stay tuned for updates..</p>
					{/* <MondayTest /> */}
				</Main.MTabPanel>
			</Main.MTabs>
		</React.Fragment>
	);
}
