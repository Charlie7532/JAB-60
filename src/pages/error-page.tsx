/** @format */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function ErrorPage() {
	const error: Error | unknown = useRouteError();
	console.error(error);

	// Check if error exists and is not null
	const errorMessage = error instanceof Error ? error.message : 'An unexpected error has occurred.';

	return (
		<React.Fragment>
			<Box textAlign="center">
				<Typography level="h1">Oops! Looks like you've lost your way</Typography>
				<Typography level="body-md">Sorry, we encountered an error while processing your request.</Typography>
				<Typography level="body-md">Please try again later or return to the home page.</Typography>
				<Typography level="body-md" fontStyle="italic">
					{errorMessage}
				</Typography>
				<Link to="/">Go Back Home</Link>
			</Box>
		</React.Fragment>
	);
}
