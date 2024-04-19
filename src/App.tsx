/** @format */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Import pages
import Root from './pages/root';

const Home = lazy(() => import('./pages/Home'));
const ErrorPage = lazy(() => import('./pages/error-page'));

const PageLoader = () => import('./pages/PageLoader').then((module) => module.loader());
const LoaderSpinner = lazy(() => import('./pages/PageLoader'));

function App() {
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
							{/* <LoaderSpiner /> */}
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
