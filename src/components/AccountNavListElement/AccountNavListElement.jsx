import { Link } from "react-router-dom";
import style from "./accountNavListElement.module.scss";

const AccountNavListElement = ({ img, text, onClick, link }) => {
	return (
		<Link to={link}>
			<li className={style.listItem} onClick={onClick}>
				<img src={img} alt={text} />
				<span>{text}</span>
			</li>
		</Link>
	);
};

export default AccountNavListElement;
