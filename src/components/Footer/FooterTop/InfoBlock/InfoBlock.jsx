import style from "./infoBlock.module.scss";

const InfoBlock = ({ img, alt, title, text }) => {
	return (
		<div className={style.infoBlock}>
			<img src={img} alt={alt} />
			<h5 className={style.title}>{title}</h5>
			<p className={style.text}>{text}</p>
		</div>
	);
};

export default InfoBlock;
