import Menu from "../Menu/Menu";
import Logo from "../UI/Logo/Logo";
import style from "./header.module.scss";

import searchIcon from "./../../assets/images/searchIcon.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";
import Button from "../UI/Button/Button";
import logoutIcon from "./../../assets/images/Logout.svg";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginAndRegisterPopup from "../LoginAndRegisterPopup/LoginAndRegisterPopup";
import { setIsLoginRegisterOpened } from "../../store/Slices/authSlice";

const Header = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector(state => state.cart);
	const {
		isLoginRegisterOpened,
		user: { uid },
	} = useSelector(state => state.auth);
	const handleCloseClick = () => {
		dispatch(setIsLoginRegisterOpened(false));
	};
	const handleLoginBtnClick = () => {
		dispatch(setIsLoginRegisterOpened(true));
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
					{uid ? <Link className={style.toAccountLink} to="/account">MyAccount</Link> : <Button text='Login' onClick={handleLoginBtnClick} />}
				</div>
			</header>
			{isLoginRegisterOpened && <LoginAndRegisterPopup handleCloseClick={handleCloseClick} />}
		</>
	);
};

export default Header;
