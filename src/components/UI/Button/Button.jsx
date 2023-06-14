import "./button.scss";

const Button = ({ text, img, alt, classes, onClick, type }) => {
	return (
		<button type={type} onClick={onClick} className={`btn-wrapper ${classes} `}>
			{img && <img src={img} alt={alt} />}
			{text}
		</button>
	);
};

export default Button
