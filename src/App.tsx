/** @format */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Import pages
import Root from './pages/root';
import { useColorScheme } from '@mui/joy/styles';

const Home = lazy(() => import('./pages/Home'));
const WatingAgents = lazy(() => import('./pages/WatingAgents'));
const ConsoleAnimation = lazy(() => import('./pages/ConsoleAnimation'));
const SuccessPage = lazy(() => import('./pages/SuccessPage'));
const ErrorPage = lazy(() => import('./pages/error-page'));

const PageLoader = () => import('./pages/PageLoader').then((module) => module.loader());
const LoaderSpinner = lazy(() => import('./pages/PageLoader'));

function App() {
	const { mode, setMode } = useColorScheme();
	console.log('current mod: ', mode);
	setMode('dark');
	const router = createBrowserRouter([
		{
			path: '/',
			id: 'root',
			element: <Root />,
			errorElement: (
				<Suspense fallback={<LoaderSpinner />}>
					<ErrorPage />
				</Suspense>
			),
			children: [
				{
					path: '/',
					element: (
						<Suspense fallback={<LoaderSpinner />}>
							<Home />
						</Suspense>
					),
					loader: PageLoader,
				},
				{
					path: '/waiting-agents',
					element: (
						<Suspense fallback={<LoaderSpinner />}>
							<WatingAgents />
						</Suspense>
					),
					loader: PageLoader,
				},
				{
					path: '/console-connected',
					element: (
						<Suspense fallback={<LoaderSpinner />}>
							<ConsoleAnimation />
						</Suspense>
					),
					loader: PageLoader,
				},
				{
					path: '/success',
					element: (
						<Suspense fallback={<LoaderSpinner />}>
							<SuccessPage />
						</Suspense>
					),
					loader: PageLoader,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
