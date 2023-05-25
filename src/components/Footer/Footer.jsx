import style from "./footer.module.scss";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

import FooterTop from "./FooterTop/FooterTop";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<FooterTop />
			<FooterContacts />
			<FooterCopyright />
		</footer>
	);
};

export default Footer;
