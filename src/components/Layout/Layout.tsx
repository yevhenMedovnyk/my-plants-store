import { Outlet, useNavigation } from "react-router-dom";
import style from "./layout.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FC } from "react";

const Layout:FC = () => {
	const { state } = useNavigation();

	return (
		<div className={style.wrapper}>
			<Header />
			<main className={style.main}>
				{state === "loading" ? <p>Loading...</p> : null}
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
