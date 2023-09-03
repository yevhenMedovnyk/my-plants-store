import { Outlet } from "react-router-dom";
import AccountNav from "../../components/AccountNav/AccountNav";
import style from "./accountPage.module.scss";

const AccountPage = () => {
	return (
		<div className={style.wrapper}>
			<AccountNav />
			<Outlet />
		</div>
	);
};

export default AccountPage;
