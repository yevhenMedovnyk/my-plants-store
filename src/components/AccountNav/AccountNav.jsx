import { UserAuth } from "../../context/AuthContext";

import Button from "../UI/Button/Button";
import style from "./accountNav.module.scss";

import logoutIcon from "./../../assets/images/Logout.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import heart from "./../../assets/images/heart.svg";
import AccountNavListElement from "../AccountNavListElement/AccountNavListElement";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navList = [
	{ img: heart, text: "Wishlist", link: "/account" },
	{ img: cartIcon, text: "Orders", link: "my_orders" },
];

const AccountNav = () => {
	const { pathname } = useLocation();
	const [activeNavListItem, setActiveNavListItem] = useState();
	const { displayName, email } = useSelector(state => state.auth.user);
	const { logout } = UserAuth();
	const handleLogout = () => {
		logout();
	};
	const handleNavListItemClick = itemName => {
		setActiveNavListItem(itemName);
	};
	useEffect(() => {
		if (pathname === "/account") {
			setActiveNavListItem("Wishlist");
		}
		if (pathname === "/account/my_orders") {
			setActiveNavListItem("Orders");
		}
	}, [pathname]);

	return (
		<div className={style.nav}>
			<h3 className={style.title}>
				My Account(<span>{displayName ? displayName : email}</span>)
			</h3>
			<ul className={style.list}>
				{navList.map(item => (
					<AccountNavListElement
						key={item.link}
						{...item}
						onClick={handleNavListItemClick}
						activeNavListItem={activeNavListItem}
						setActiveNavListItem={setActiveNavListItem}
					/>
				))}
			</ul>
			<div className={style.logout}>
				<Button onClick={handleLogout} text='Logout' img={logoutIcon} classes='logout' />
			</div>
		</div>
	);
};

export default AccountNav;
