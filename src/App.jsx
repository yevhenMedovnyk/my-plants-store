import { createBrowserRouter } from "react-router-dom";

import Layout from "./../src/components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import "./App.css";
import PlantCarePage from "./pages/PlantCarePage/PlantCarePage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import ShopItemPage from "./pages/PlantFullPage/PlantFullPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
			{
				path: "/plant/:id",
				element: <ShopItemPage />,
			},
			{
				path: "/plantCare",
				element: <PlantCarePage />,
			},
			{
				path: "/blogs",
				element: <BlogsPage />,
			},
		],
	},
]);

const App = () => {
	return <></>;
};

export default App;
