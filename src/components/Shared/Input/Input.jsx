import { useRef } from "react";
import style from "./input.module.scss";

import removeIcon from "./../../../assets/images/remove-icon.svg";

const Input = ({
	placeholder,
	text,
	type,
	btnType,
	classes,
	onClick,
	onClickRemove,
	onChange,
	value,
	img,
}) => {
	const inputRef = useRef(null);

	return (
		<div  className={[style.input, style[`${classes}`]].join(" ")}>
			<input
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				ref={inputRef}
			/>
			{img && <img src={removeIcon} alt='remove' onClick={() => onClickRemove(inputRef)} />}
			<button type={btnType} onClick={onClick}>{text}</button>
		</div>
	);
};

export default Input;
