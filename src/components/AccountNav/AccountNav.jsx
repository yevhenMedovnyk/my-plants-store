import Button from "../UI/Button/Button";
import style from "./accountNav.module.scss";

import logoutIcon from "./../../assets/images/Logout.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import heart from "./../../assets/images/heart.svg";
import AccountNavListElement from "../AccountNavlistElement/AccountNavlistElement";

const navList = [
	{ img: heart, text: "Wishlist", link: "/account" },
	{ img: cartIcon, text: "Orders", link: "my_orders" },
];

const AccountNav = () => {
	return (
		<div className={style.nav}>
			<h3 className={style.title}>My Account</h3>
			<ul className={style.list}>
				{navList.map(item => (
					<AccountNavListElement key={item.link} {...item} />
				))}
			</ul>
			<div className={style.logout}>
				<Button text='Logout' img={logoutIcon} classes='logout' />
			</div>
		</div>
	);
};

export default AccountNav;
