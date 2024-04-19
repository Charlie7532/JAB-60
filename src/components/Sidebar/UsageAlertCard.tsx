/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LinearProgress from '@mui/joy/LinearProgress';
import Button from '@mui/joy/Button';

interface UsageAlertCardProps {
	usage: number;
}
const UsageAlertCard: React.FC<UsageAlertCardProps> = ({ usage }) => {
    const threshold = 50; 
	const [isVisible, setIsVisible] = useState(usage > threshold);

	const handleClose = () => {
		setIsVisible(false);
	};

	return (
		<React.Fragment>
			{isVisible && usage > threshold && (
				<Card invertedColors variant="soft" color="warning" size="sm" sx={{ boxShadow: 'none' }}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography level="title-sm">Used space</Typography>
						<IconButton size="sm" onClick={handleClose}>
							<CloseRoundedIcon />
						</IconButton>
					</Stack>
					<Typography level="body-xs">Your team has used {usage.toFixed(0)}% of your available space. Need more?</Typography>
					<LinearProgress variant="outlined" value={usage} determinate sx={{ my: 1 }} />
					<Button size="sm" variant="solid" sx={{ border: 'none', width: '100%' }}>
						<Link to="/upgrade" style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}>
							Upgrade plan
						</Link>
					</Button>
				</Card>
			)}
		</React.Fragment>
	);
};

export default UsageAlertCard;
