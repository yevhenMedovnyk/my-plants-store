import "./button.scss";

const Button = ({ text, img, alt, classes, onClick, type, disabled }) => {
	return (
		<button
			disabled={disabled}
			style={disabled ? { opacity: 0.3, pointerEvents: "none"} : null}
			type={type}
			onClick={onClick}
			className={`btn-wrapper ${classes} `}
		>
			{img && <img src={img} alt={alt} />}
			{text}
		</button>
	);
};

export default Button;
