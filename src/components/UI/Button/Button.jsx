import "./button.scss";

const Button = ({ text, img, alt, classes }) => {
	return (
		<button className={`btn-wrapper ${classes} `}>
			{img && <img src={img} alt={alt} />}
			{text}
		</button>
	);
};

export default Button
