import { useRouteError } from "react-router-dom";
import style from "./errorPage.module.scss";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div>
			<p>Something went wrong</p>
			<p>{error.statusText ?? error.message}</p>
		</div>
	);
};

export default ErrorPage;
