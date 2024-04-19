/** @format */

import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


interface TogglerProps {
	defaultExpanded?: boolean;
	children: React.ReactNode;
	renderToggle: (params: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => React.ReactNode;
}

function Toggler({ defaultExpanded = false, renderToggle, children }: TogglerProps) {
	const [open, setOpen] = React.useState(defaultExpanded);

	return (
		<>
			{renderToggle({ open, setOpen })}
			<Box
				sx={{
					display: 'grid',
					gridTemplateRows: open ? '1fr' : '0fr',
					transition: '0.2s ease',
					'& > *': {
						overflow: 'hidden',
					},
				}}>
				{children}
			</Box>
		</>
	);
}

interface NestedListItemComponentProps {
	title: string;
	icon: React.ElementType;
	subitems?: { name: string; href?: string }[];
}

export default function NestedListItemComponent({ title, icon: Icon, subitems = [] }: NestedListItemComponentProps) {
	return (
		<ListItem nested>
			<Toggler
				renderToggle={({ open, setOpen }) => (
					<ListItemButton onClick={() => setOpen(!open)}>
						{Icon && <Icon />}
						<ListItemContent>
							<Typography level="title-sm">{title}</Typography>
						</ListItemContent>
						<KeyboardArrowDownIcon sx={{ transform: open ? 'rotate(180deg)' : 'none' }} />
					</ListItemButton>
				)}>
				<List sx={{ gap: 0.5 }}>
					{subitems.map((item, index) => (
						<ListItem key={index}>
							<ListItemButton component="a" {...(item.href && { href: item.href })}>
								{item.name}
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Toggler>
		</ListItem>
	);
}
