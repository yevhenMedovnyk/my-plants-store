import style from "./logo.module.scss";
import logo from "./../../../assets/images/logo.png";

const Logo = () => {
	return (
		<div className={style.logo}>
			<img src={logo} alt='logo' />
			<span>greenshop</span>
		</div>
	);
};

export default Logo;
