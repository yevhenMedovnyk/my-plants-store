import style from "./logo.module.scss";
import logo from "./../../../assets/images/logo.svg";

const Logo = () => {
	return (
		<div className={style.logo}>
			<img src={logo} alt='logo' />
		</div>
	);
};

export default Logo;
