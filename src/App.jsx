import { createBrowserRouter } from "react-router-dom";

import Layout from "./../src/components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import PlantCarePage from "./pages/PlantCarePage/PlantCarePage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import ShopItemPage from "./pages/PlantFullPage/PlantFullPage";
import CartPage from "./pages/CartPage/CartPage";

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
			{
				path: "/cart",
				element: <CartPage />,
			},
		],
	},
]);

const App = () => {
	return <></>;
};

export default App;
