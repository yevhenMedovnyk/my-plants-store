import { Link } from "react-router-dom";
import style from "./accountNavListElement.module.scss";

const AccountNavListElement = ({ img, img_active, text, onClick, link, activeNavListItem }) => {
	return (
		<Link to={link}>
			<li
				className={[style.listItem, activeNavListItem === text ? style.active : null].join(" ")}
				onClick={() => onClick(text)}
			>
				<img src={activeNavListItem === text ? img_active : img} alt={text} />
				<span>{text}</span>
			</li>
		</Link>
	);
};

export default AccountNavListElement;
