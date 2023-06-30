import { UserAuth } from "../../context/AuthContext";

import Button from "../UI/Button/Button";
import style from "./accountNav.module.scss";

import logoutIcon from "./../../assets/images/Logout.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import heart from "./../../assets/images/heart.svg";
import AccountNavListElement from "../AccountNavlistElement/AccountNavlistElement";
import { useSelector } from "react-redux";

const navList = [
	{ img: heart, text: "Wishlist", link: "/account" },
	{ img: cartIcon, text: "Orders", link: "my_orders" },
];

const AccountNav = () => {
	const { displayName } = useSelector(state => state.auth.user);
	const { logout } = UserAuth();
	const handleLogout = () => {
		logout();
	};

	return (
		<div className={style.nav}>
			<h3 className={style.title}>
				My Account(<span>{displayName}</span>)
			</h3>
			<ul className={style.list}>
				{navList.map(item => (
					<AccountNavListElement key={item.link} {...item} />
				))}
			</ul>
			<div className={style.logout}>
				<Button onClick={handleLogout} text='Logout' img={logoutIcon} classes='logout' />
			</div>
		</div>
	);
};

export default AccountNav;
