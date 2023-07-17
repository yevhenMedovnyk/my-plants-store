import style from "./SearchInput.module.scss";

import removeIcon from "./../../assets/images/remove-icon.svg";
import { useRef } from "react";

const SearchInput = ({ value, onChange, onClick }) => {
	const inputRef = useRef(null);

	return (
		<form className={style.wrapper}>
			<input
				placeholder="I'm looking for..."
				value={value}
				onChange={e => onChange(e)}
				ref={inputRef}
			/>
			<img src={removeIcon} alt='remove' onClick={() => onClick(inputRef)} />
		</form>
	);
};

export default SearchInput;
