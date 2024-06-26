/** @format */

import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import { Box } from '@mui/joy';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { closeSidebar } from '../../utils/utils';
import List from '@mui/joy/List';
import { listItemButtonClasses } from '@mui/joy/ListItemButton';

export function MainMenu({ children }: { children: React.ReactNode }) {
	return (
		<List
			size="sm"
			sx={{
				gap: 1,
				'--List-nestedInsetStart': '30px',
				'--ListItem-radius': (theme) => theme.vars.radius.sm,
			}}>
			{children}
		</List>
	);
}

export function SupportMenu({ children }: { children: React.ReactNode }) {
	return (
		<List
			size="sm"
			sx={{
				mt: 'auto',
				flexGrow: 0,
				'--ListItem-radius': (theme) => theme.vars.radius.sm,
				'--List-gap': '8px',
				mb: 2,
			}}>
			{children}
		</List>
	);
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
	return (
		<Sheet
			className="Sidebar"
			sx={{
				position: { xs: 'fixed', md: 'sticky' },
				transform: {
					xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
					md: 'none',
				},
				transition: 'transform 0.4s, width 0.4s',
				zIndex: 10000,
				height: '100dvh',
				width: 'var(--Sidebar-width)',
				top: 0,
				p: 2,
				flexShrink: 0,
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				borderRight: '1px solid',
				borderColor: 'divider',
			}}>
			<GlobalStyles
				styles={(theme) => ({
					':root': {
						'--Sidebar-width': '220px',
						[theme.breakpoints.up('lg')]: {
							'--Sidebar-width': '240px',
						},
					},
				})}
			/>
			<Box
				className="Sidebar-overlay"
				sx={{
					position: 'fixed',
					zIndex: 9998,
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					opacity: 'var(--SideNavigation-slideIn)',
					backgroundColor: 'var(--joy-palette-background-backdrop)',
					transition: 'opacity 0.4s',
					transform: {
						xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
						lg: 'translateX(-100%)',
					},
				}}
				onClick={() => closeSidebar()}
			/>

			<Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
				<IconButton variant="plain" size="sm" aria-label="Main 12 Home" component={Link} to="/"></IconButton>
				<Typography level="title-lg">TOP GUN</Typography>
			</Box>
			<Divider />
			<Input id="search_bar" size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />

			<Box
				sx={{
					minHeight: 0,
					overflow: 'hidden auto',
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					[`& .${listItemButtonClasses.root}`]: { gap: 1.5 },
				}}>
				{children}
			</Box>

			<Divider />
		</Sheet>
	);
}
