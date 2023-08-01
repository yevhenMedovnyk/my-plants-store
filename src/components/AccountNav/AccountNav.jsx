import { UserAuth } from "../../context/AuthContext";

import Button from "../UI/Button/Button";
import style from "./accountNav.module.scss";

import logoutIcon from "./../../assets/images/Logout.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import cartIcon_green from "./../../assets/images/cartIcon_green.svg";
import heart from "./../../assets/images/heart.svg";
import heartGreen from "./../../assets/images/heart-green.svg";
import AccountNavListElement from "../AccountNavListElement/AccountNavListElement";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import burger from "./../../assets/images/burger_menu.svg";
import burger_close from "./../../assets/images/burger_close.svg";
import { useHandleClickOutside } from "../../helpers/useHandleClickOutside";

const navList = [
	{ img: heart, img_active: heartGreen, text: "Wishlist", link: "/account" },
	{ img: cartIcon, img_active: cartIcon_green, text: "Orders", link: "my_orders" },
];

const AccountNav = () => {
	const { pathname } = useLocation();
	const [activeNavListItem, setActiveNavListItem] = useState();
	const [isBurgerOpened, setIsBurgerOpened] = useState(false);

	const { displayName } = useSelector(state => state.auth.user);
	const name = displayName.split(" ")[0];
	const { logout } = UserAuth();
	const handleLogout = () => {
		logout();
	};
	const handleNavListItemClick = itemName => {
		setActiveNavListItem(itemName);
		setIsBurgerOpened(false);
	};
	useEffect(() => {
		if (pathname === "/account") {
			setActiveNavListItem("Wishlist");
		}
		if (pathname === "/account/my_orders") {
			setActiveNavListItem("Orders");
		}
	}, [pathname]);

	const navListRef = useRef(null);
	const burgerIconRef = useRef(null);
	useHandleClickOutside(navListRef, burgerIconRef, setIsBurgerOpened);

	return (
		<>
			<button
				ref={burgerIconRef}
				onClick={() => setIsBurgerOpened(!isBurgerOpened)}
				className={style.burger_btn}
			>
				<img src={isBurgerOpened ? burger_close : burger} alt='burger menu' />
			</button>
			<div ref={navListRef} className={[style.nav, isBurgerOpened ? style.active : ""].join(" ")}>
				<h3 className={style.title}>
					Hi, (<span>{name}</span>)
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
		</>
	);
};

export default AccountNav;
