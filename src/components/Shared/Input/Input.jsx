import style from "./input.module.scss";

const Input = ({ placeholder, text, type, classes }) => {
	return (
		<form className={[style.input, style[`${classes}`]].join(" ")}>
			<input type={type} placeholder={placeholder} />
			<button>{text}</button>
		</form>
	);
};

export default Input;
