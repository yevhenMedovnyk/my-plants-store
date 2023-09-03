import { FC } from "react";
import style from "./footerCopyright.module.scss";

const FooterCopyright:FC = () => {
	return (
		<div className={style.copy}>
			<p>© 2023 Plants Market.</p>
		</div>
	);
};

export default FooterCopyright;
