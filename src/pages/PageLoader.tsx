/** @format */

import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function PageLoader() {
	return (
		<React.Fragment>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
				}}>
				<CircularProgress size="lg" />
			</Box>
		</React.Fragment>
	);
}

export function loader() {
	return (
		<React.Fragment>
			<Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
				...
				<CircularProgress size="lg" />
			</Box>
		</React.Fragment>
	);
}
