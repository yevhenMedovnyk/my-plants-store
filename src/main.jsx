import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App, { router } from "./App.jsx";
import "./index.scss";
import "./assets/fonts/fonts.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>,
);
