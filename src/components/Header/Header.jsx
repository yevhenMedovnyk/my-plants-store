import Menu from "../Menu/Menu";
import Logo from "../UI/Logo/Logo";
import style from "./header.module.scss";

import searchIcon from "./../../assets/images/searchIcon.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import Button from "../UI/Button/Button";
//import logoutIcon from "./../../assets/images/Logout.svg";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginAndRegisterPopup from "../LoginAndRegisterPopup/LoginAndRegisterPopup";
import { useState } from "react";

const Header = () => {
	const { cart } = useSelector(state => state.cart);
	const [isLoginRegisterOpened, setIsLoginRegisterOpened] = useState(false);
	const handleCloseClick = () => {
		setIsLoginRegisterOpened(false);
	};
	const handleLoginBtnClick = () => {
		setIsLoginRegisterOpened(true);
	};
	const cartItemsCount = cart.length;

	return (
		<>
			<header className={style.header}>
				<Logo />
				<Menu />
				<div className={style.rightBlock}>
					<img className={style.searchIcon} src={searchIcon} alt='search' />
					<Link to='/cart' className={style.cartIcon}>
						<img src={cartIcon} alt='cart' />
						{!!cartItemsCount && <span>{cartItemsCount}</span>}
					</Link>
					<Button text='Login' onClick={handleLoginBtnClick} />
				</div>
			</header>
			{isLoginRegisterOpened && <LoginAndRegisterPopup handleCloseClick={handleCloseClick} />}
		</>
	);
};

export default Header;
