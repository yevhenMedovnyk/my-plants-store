import Menu from "../Menu/Menu";
import Logo from "../UI/Logo/Logo";
import style from "./header.module.scss";

import searchIcon from "./../../assets/images/searchIcon.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import Button from "../UI/Button/Button";
//import logoutIcon from "./../../assets/images/Logout.svg";

const Header = () => {
	return (
		<header className={style.header}>
			<Logo />
			<Menu />
			<div className={style.rightBlock}>
				<img className={style.searchIcon} src={searchIcon} alt='search' />
				<div className={style.cartIcon}>
					<img src={cartIcon} alt='cart' />
					<span>6</span>
				</div>
				<Button text='Login' />
			</div>
		</header>
	);
};

export default Header;
