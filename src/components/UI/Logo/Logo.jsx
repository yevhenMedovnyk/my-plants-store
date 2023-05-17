import style from "./logo.module.scss";
import logo from "./../../../assets/images/logo.svg";

export default function Logo() {
	return (
		<div className={style.logo}>
			<img src={logo} alt='logo' />
			<span>greenshop</span>
		</div>
	);
}
