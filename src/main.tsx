/** @format */

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

import { StyledEngineProvider } from '@mui/joy/styles';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import main12_theme from './assets/themes/main12_theme';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssVarsProvider theme={main12_theme}>
				<CssBaseline />
				<App />
			</CssVarsProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
