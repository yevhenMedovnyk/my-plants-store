import {FC, useRef} from 'react';
import style from './input.module.scss';

import removeIcon from './../../../assets/images/remove-icon.svg';

type InputProps = {
	placeholder: string;
	text: string;
	type?: string;
	btnType?: 'submit' | 'reset' | 'button' | undefined;
	classes?: string;
	onClick?: () => void;
	onClickRemove?: (ref: React.RefObject<HTMLInputElement>) => void;
	onChange?: (e: any) => void;
	value?: string;
	img?: boolean;
};

const Input: FC<InputProps> = ({
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
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className={[style.input, style[`${classes}`]].join(' ')}>
			<input
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				ref={inputRef}
			/>
			{img && onClickRemove && (
				<img src={removeIcon} alt="remove" onClick={() => onClickRemove(inputRef)} />
			)}
			<button type={btnType} onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

export default Input;
