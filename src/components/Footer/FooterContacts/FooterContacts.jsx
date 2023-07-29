import style from "./footerContacts.module.scss";

import Logo from "./../../UI/Logo/Logo";

import location from "./../../../assets/images/location.svg";
import email from "./../../../assets/images/email.svg";
import tel from "./../../../assets/images/tel.svg";

const FooterContacts = () => {
	return (
		<div className={style.contacts}>
			<Logo />
			<div className={style.contactsItem}>
				<img src={location} alt='location' />
				<a
					href='http://maps.google.com/?q=70 West Buckingham Ave. Farmingdale, NY 11735'
					className={style.address}
					target='_blank'
					rel='noreferrer'
				>
					70 West Buckingham Ave. Farmingdale, NY 11735
				</a>
			</div>
			<div className={style.contactsItem}>
				<img src={email} alt='email' />
				<a href='mailto: contact@greenshop.com'>contact@greenshop.com</a>
			</div>
			<div className={style.contactsItem}>
				<img src={tel} alt='tel' />
				<a href='tel: +88 01911 717 490'>+88 01911 717 490</a>
			</div>
		</div>
	);
};

export default FooterContacts;
