import style from "./input.module.scss";

const Input = ({ placeholder, text, type, classes, onClick, onChange, value }) => {

	return (
		<form className={[style.input, style[`${classes}`]].join(" ")}>
			<input
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<button onClick={onClick}>{text}</button>
		</form>
	);
};

export default Input;
