import { createBrowserRouter } from "react-router-dom";

import Layout from "./../src/components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.css";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/shop",
				element: <ShopPage />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<Layout />
		</>
	);
}

export default App;
