import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./layout.module.scss";

const Layout = () => {
	return (
		<div className={style.wrapper}>
			<Header />
			<main className={style.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
