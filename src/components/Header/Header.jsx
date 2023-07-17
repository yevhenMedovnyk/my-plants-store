import Menu from "../Menu/Menu";
import Logo from "../UI/Logo/Logo";
import style from "./header.module.scss";

import cartIcon from "./../../assets/images/cartIcon.svg";
import Button from "../UI/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginAndRegisterPopup from "../LoginAndRegisterPopup/LoginAndRegisterPopup";
import { setIsLoginRegisterOpened } from "../../store/Slices/authSlice";
import { useEffect, useRef, useState } from "react";
import Input from "../Shared/Input/Input";

import burger from "./../../assets/images/burger_menu.svg";
import burger_close from "./../../assets/images/burger_close.svg";
import searchIcon from "./../../assets/images/searchIcon.svg";
import logged from "./../../assets/images/logged.svg";
import { setSearchInputValue } from "../../store/Slices/searchSlice";
import { fetchPlants } from "../../store/Slices/mainSlice";
import { PLANTS_URL } from "../../constants/URLs";

const Header = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const { cart } = useSelector(state => state.cart);
	const { searchInputValue } = useSelector(state => state.search);
	const {
		isLoginRegisterOpened,
		user: { uid, photoURL },
	} = useSelector(state => state.auth);
	const [isSearchActive, setIsSearchActive] = useState(false);
	const [isBurgerOpened, setIsBurgerOpened] = useState(false);

	const handleSearchIconClick = () => {
		setIsSearchActive(true);
	};
	const handleSearchInputChange = e => {
		const value = e.target.value;
		dispatch(setSearchInputValue(value));
	};
	const handleRemoveClick = ref => {
		dispatch(setSearchInputValue(""));
		ref.current.focus();
	};

	const searchInputRef = useRef(null);
	const searchIconRef = useRef(null);
	const burgerIconRef = useRef(null);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = e => {
			let path = e.composedPath().includes(searchInputRef.current);
			let searchIconPath = e.composedPath().includes(searchIconRef.current);
			if (!path && !searchIconPath) {
				setIsSearchActive(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);
		return () => document.body.removeEventListener("click", handleClickOutside);
	}, []);
	useEffect(() => {
		const handleClickOutside = e => {
			let path = e.composedPath().includes(menuRef.current);
			let burgerIconPath = e.composedPath().includes(burgerIconRef.current);
			if (!path && !burgerIconPath) {
				setIsBurgerOpened(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);
		return () => document.body.removeEventListener("click", handleClickOutside);
	}, []);

	const handleCloseClick = () => {
		dispatch(setIsLoginRegisterOpened(false));
	};
	const handleLoginBtnClick = () => {
		dispatch(setIsLoginRegisterOpened(true));
	};
	const handleBurgerClick = () => {
		setIsBurgerOpened(!isBurgerOpened);
	};
	const handleSearchBtnClick = e => {
		e.preventDefault();
		dispatch(fetchPlants(`${PLANTS_URL}?plant_name_like=${searchInputValue}`));
		navigation("/search");
		setIsSearchActive(false);
	};
	const cartItemsCount = cart.length;

	return (
		<>
			<header className={style.header}>
				<Link className={style.logoLink} to='/'>
					<Logo />
				</Link>
				<Menu
					onClickSearchIcon={handleSearchIconClick}
					isBurgerOpened={isBurgerOpened}
					setIsBurgerOpened={setIsBurgerOpened}
					menuRef={menuRef}
				/>
				<form
					onSubmit={handleSearchBtnClick}
					ref={searchInputRef}
					className={[style.search, isSearchActive ? style.open : null].join(" ")}
				>
					<Input
						classes='search'
						placeholder="I'm looking for..."
						onChange={handleSearchInputChange}
						onClickRemove={handleRemoveClick}
						value={searchInputValue}
						text='Search'
						img
						btnType='submit'
					/>
				</form>

				<div className={style.rightBlock}>
					<img
						ref={searchIconRef}
						onClick={handleSearchIconClick}
						className={style.searchIcon}
						src={searchIcon}
						alt='search'
					/>
					<Link to='/cart' className={style.cartIcon}>
						<img src={cartIcon} alt='cart' />
						{!!cartItemsCount && <span>{cartItemsCount}</span>}
					</Link>
					{uid ? (
						<Link
							className={[style.toAccountLink, photoURL ? style.picture : ""].join(" ")}
							to='/account'
						>
							<img src={photoURL ? photoURL : logged} alt='My account' />
						</Link>
					) : (
						<Button text='Login' onClick={handleLoginBtnClick} />
					)}
				</div>
				<button ref={burgerIconRef} onClick={handleBurgerClick} className={style.burger_btn}>
					<img src={isBurgerOpened ? burger_close : burger} alt='burger menu' />
				</button>
			</header>
			{isLoginRegisterOpened && <LoginAndRegisterPopup handleCloseClick={handleCloseClick} />}
		</>
	);
};

export default Header;
