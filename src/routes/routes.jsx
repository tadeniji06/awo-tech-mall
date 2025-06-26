import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../screens/Home";
import About from "../screens/About";
import Spaces from "../screens/Spaces";
import Events from "../screens/Events";
import Contact from "../screens/Contact";
import NotFound from "../screens/NotFound";
import Features from "../screens/Features";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/spaces",
				element: <Spaces />,
			},
			{
				path: "/events",
				element: <Events />,
			},
				{
				path: "/features",
				element: <Features />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
