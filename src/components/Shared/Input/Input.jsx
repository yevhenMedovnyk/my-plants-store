import style from "./input.module.scss";

const Input = ({ placeholder, text, type }) => {
	return (
		<form className={style.input}>
			<input type={type} placeholder={placeholder} />
			<button>{text}</button>
		</form>
	);
};

export default Input;
