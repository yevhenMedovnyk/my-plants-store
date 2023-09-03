import {FC} from 'react';
import s from './button.module.scss';

interface IButtonProps {
	text?: string;
	img?: string;
	alt?: string;
	classes?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	BtnRef?: any;
}

const Button: FC<IButtonProps> = (props) => {
	const {text, img, alt, classes, onClick, type, disabled, BtnRef} = props;

	return (
		<button
			ref={BtnRef}
			disabled={disabled}
			style={disabled ? {opacity: 0.3, pointerEvents: 'none'} : undefined}
			type={type}
			onClick={onClick}
			className={[s.btnWrapper, classes && s[classes]].join(' ')}
		>
			{img && <img src={img} alt={alt} />}
			{text}
		</button>
	);
};

export default Button;
