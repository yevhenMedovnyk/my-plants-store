import { createBrowserRouter } from "react-router-dom";

import Layout from "./../src/components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

import PlantCarePage from "./pages/PlantCarePage/PlantCarePage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import ShopItemPage, { fetchData } from "./pages/PlantFullPage/PlantFullPage";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
			{
				path: "/plant/:id",
				element: <ShopItemPage />,
				loader: fetchData,
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
			{
				path: "/cart/checkout",
				element: <CheckoutPage />,
			},
		],
	},
]);

const App = () => {
	return <></>;
};

export default App;
