/** @format */
import * as React from 'react';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Tab from '@mui/joy/Tab';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';
import { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

	return (
		<Breadcrumbs size="sm" aria-label="breadcrumbs" separator={<ChevronRightRoundedIcon />} sx={{ pl: 0 }}>
			<Link to="/" aria-label="Home" className="breadcrumbs-link">
				<HomeRoundedIcon />
			</Link>

			{pathSegments.map((segment, index) => (
				<Link key={index} to={`/${pathSegments.slice(0, index + 1).join('/')}`} className="breadcrumbs-link">
					{segment}
				</Link>
			))}
		</Breadcrumbs>
	);
}

interface TabProps {
	value: string | number;
	children: React.ReactNode;
}
interface TabsProps {
	defaultValue: string | number;
	children: React.ReactNode;
	[key: string]: any;
}
export function MTabs({ defaultValue, children, ...rest }: TabsProps) {
	const [activeTab, setActiveTab] = React.useState('home');
	const urlParams = new URLSearchParams(window.location.search);
	const tabParam = urlParams.get('tab');

	React.useEffect(() => {
		if (tabParam && React.Children.toArray(children).some((child: any) => child.props.value === tabParam)) {
			setActiveTab(tabParam);
		} else {
			setActiveTab(defaultValue.toString());
			const params = new URLSearchParams(window.location.search);
			params.set('tab', defaultValue.toString());
			window.history.pushState(null, '', '?' + params.toString());
		}
	}, [tabParam, children, defaultValue]);

	const handleChange = (_event: React.SyntheticEvent<Element, Event> | null, newValue: string | number | null) => {
		if (newValue !== null) {
			setActiveTab(newValue.toString());
		}
		const params = new URLSearchParams(window.location.search);
		params.set('tab', newValue?.toString() ?? ''); // Handle null value gracefully
		window.history.pushState(null, '', '?' + params.toString());
	};

	return (
		<Tabs
			value={activeTab}
			onChange={handleChange}
			defaultValue={defaultValue}
			sx={{
				bgcolor: 'transparent',
			}}
			{...rest}>
			{children}
		</Tabs>
	);
}

export function MTabList({ children }: { children: React.ReactNode }) {
	return (
		<TabList
			sticky="top"
			tabFlex={1}
			size="sm"
			sx={{
				pt: { xs: 'calc(12px )', md: 3 },
				pl: { xs: 0, md: 4 },
				justifyContent: 'left',
				zIndex: 9995,
				[`&& .${tabClasses.root}`]: {
					fontWeight: '600',
					flex: 'initial',
					color: 'text.tertiary',
					[`&.${tabClasses.selected}`]: {
						bgcolor: 'transparent',
						color: 'text.primary',
						'&::after': {
							height: '2px',
							bgcolor: 'primary.500',
						},
					},
				},
			}}>
			{children}
		</TabList>
	);
}

export function MTab({ value, children }: TabProps) {
	return (
		<Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={value}>
			{children}
		</Tab>
	);
}

export function MTabPanel({ value, children }: TabProps) {
	return <TabPanel value={value}>{children}</TabPanel>;
}

interface MainHeaderProps {
	children?: React.ReactNode;
}
export function MainHeader({ children }: MainHeaderProps) {
	return (
		<React.Fragment>
			<Box
				sx={{
					top: { sm: -100, md: -110 },
					bgcolor: 'background.body',
					zIndex: 9995,
				}}>
				<Box sx={{ px: { xs: 2, md: 6 } }}>
					<Breadcrumb />
					<Typography level="h2" component="h1" sx={{ mt: 1, mb: 0 }}>
						{children}
					</Typography>
				</Box>
			</Box>
		</React.Fragment>
	);
}

export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			<Box
				component="main"
				className="MainContent"
				id="main"
				sx={{
					pt: { xs: 'calc(var(--Header-height))', md: 0 },
					pb: { xs: 2, sm: 2, md: 3 },
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					minWidth: 0,
					height: { xs: 'auto', md: '100dvh' },
					gap: 0,
					overflow: 'auto',
				}}>
				{children}
			</Box>
		</React.Fragment>
	);
}
