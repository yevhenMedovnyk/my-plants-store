import { Link } from "react-router-dom";
import style from "./accountNavListElement.module.scss";
import { FC } from "react";

interface IAccountNavListElementProps {
	img: string;
	img_active: string;
	text: string;
	link: string;
	activeNavListItem: string;
	onClick: (text: string) => void;
}

const AccountNavListElement: FC<IAccountNavListElementProps> = ({
	img,
	img_active,
	text,
	onClick,
	link,
	activeNavListItem,
}) => {
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
