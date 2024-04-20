/** @format */

import React from 'react';
import { Outlet } from 'react-router-dom';

// Joy
import Box from '@mui/joy/Box';
// import Header from '../components/Header';

// Sidebar Menu
import Sidebar, { MainMenu, SupportMenu } from '../components/Sidebar/Sidebar';
import ListItemComponent from '../components/Sidebar/ListItemComponent';

// Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';

import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

import Link from '@mui/joy/Link';

import Main from '../components/MainWrapper';
import Stack from '@mui/joy/Stack';


function getNotifications() {
	let n = {
		home: '',
		dashboard: '',
		messages: '12',
		tasks: '5',
	};
	return n;
}

export default function Root() {
	const notifications = getNotifications();
	return (
		<React.Fragment>
			<Box sx={{ display: 'flex', minHeight: '100dvh' }}>
				{/* <Header /> */}

				<Sidebar>
					<MainMenu>
						<ListItemComponent to="/" title="Home" icon={HomeRoundedIcon} notifications={notifications.home} />
						{/* <ListItemComponent to="/Dashboard" title="Dashboard" icon={DashboardRoundedIcon} notifications={notifications.dashboard} /> */}
						{/* <ListItemComponent to="/assets" title="Assets" icon={StorageOutlinedIcon} notifications={notifications.dashboard} /> */}
					</MainMenu>
					<SupportMenu>
						<ListItemComponent to="https://main12.com/contact-us/" title="Support" icon={SupportRoundedIcon} />
					</SupportMenu>
					<Stack spacing={2}></Stack>

					<Box sx={{ color: 'var(--main12-palette-divider)', textAlign: 'center' }}>
						<Link href={import.meta.env.VITE_REACT_APP_PRIVACY_POLICY as string} sx={{ fontSize: '0.8rem', color: 'var(--main12-palette-text-icon)' }}>
							privacy <ArrowOutwardRoundedIcon fontSize="small" />
						</Link>
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<Link href={import.meta.env.VITE_REACT_APP_TERMS_OF_USE as string} sx={{ fontSize: '0.8rem', color: 'var(--main12-palette-text-icon)' }}>
							terms <ArrowOutwardRoundedIcon fontSize="small" />
						</Link>
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<Link href={import.meta.env.VITE_REACT_APP_HELP as string} sx={{ fontSize: '0.8rem', color: 'var(--main12-palette-text-icon)' }}>
							help <ArrowOutwardRoundedIcon fontSize="small" />
						</Link>
					</Box>
				</Sidebar>

				<Main>
					<Outlet />
				</Main>
			</Box>
		</React.Fragment>
	);
}
