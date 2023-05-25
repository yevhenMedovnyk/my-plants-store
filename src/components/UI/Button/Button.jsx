import "./button.scss";

const Button = ({ text, img, alt, classes, onClick }) => {
	return (
		<button onClick={onClick} className={`btn-wrapper ${classes} `}>
			{img && <img src={img} alt={alt} />}
			{text}
		</button>
	);
};

export default Button
