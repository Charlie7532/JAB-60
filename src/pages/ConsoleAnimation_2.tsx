/** @format */

import * as React from 'react';
import Terminal from '../components/Terminal';
import Box from '@mui/joy/Box';
import { useNavigate } from 'react-router-dom';

const commands = [
	'sudo apt-get update',
	'sudo apt-get upgrade',
	'sudo apt-get install python3',
	'sudo apt-get install nodejs',
	'npm install -g create-react-app',
	'create-react-app my-app',
	'cd my-app',
	'npm start',
	'git clone https://github.com/username/repo.git',
	'cd repo',
	'npm install',
	'npm run build',
	'./start_server.sh',
	'exit',
	'sudo apt-get install git',
	'git init',
	'git add .',
	'git commit -m "Initial commit"',
	'git push origin master',
	'npm install express',
	'npm install body-parser',
	'npm install cors',
	'npm install axios',
	'npm install mongoose',
	'npm install dotenv',
	'npm install nodemon --save-dev',
	'npm install react-router-dom',
	'npm install @mui/material',
	'npm install @mui/icons-material',
	'npm install @mui/lab',
	'npm install @mui/system',
	'npm install @mui/styled-engine',
	'npm install @mui/styles',
	'npm install @mui/private-theming',
	'npm install @mui/private-theming-utils',
	'npm install @mui/private-mui-error',
	'npm install @mui/private-data-grid',
	'npm install @mui/private-utils',
	'npm install @mui/private-theming-extras',
	'npm install @mui/private-test-utils',
	'npm install @mui/private-skeleton',
	'npm install @mui/private-draft-utils',
	'npm install @mui/private-dev-utils',
	'npm install @mui/private-color-swatch',
	'npm install @mui/private-breakpoints',
	'npm install @mui/private-autocomplete',
	'npm install @mui/private-alert',
	'npm install @mui/private-activity',
	'npm install @mui/private-anchor',
];

export default function Console() {
	const navigate = useNavigate();

	React.useEffect(() => {
		// Wait for 15 seconds before redirecting
		const timeoutId = setTimeout(() => {
			navigate('/console-connected-2');
		}, 2000); // Changed to 15000 milliseconds (15 seconds)

		// Clean up the timeout
		return () => clearTimeout(timeoutId);
	}, [navigate]);
	return (
		<Box height="100vh">
			<Terminal commands={commands} repetitions={20} scrollSpeed={1} />
		</Box>
	);
}
