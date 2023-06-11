import style from "./input.module.scss";

const Input = ({ placeholder, text, type, classes, onClick, onChange, value }) => {

	return (
		<div className={[style.input, style[`${classes}`]].join(" ")}>
			<input
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<button onClick={onClick}>{text}</button>
		</div>
	);
};

export default Input;
