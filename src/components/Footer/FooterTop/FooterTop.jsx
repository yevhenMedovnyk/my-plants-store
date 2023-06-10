import style from "./footerTop.module.scss";

import InfoBlock from "./InfoBlock/InfoBlock";

import img_1 from "./../../../assets/images/footerImg_1.png";
import img_2 from "./../../../assets/images/footerImg_2.png";
import img_3 from "./../../../assets/images/footerImg_3.png";
import Input from "../../Shared/Input/Input";

const FooterTop = () => {
	return (
		<div className={style.top}>
			<InfoBlock
				img={img_1}
				title='Garden Care'
				text='We are an online plant shop offering a wide range of cheap and trendy plants.'
			/>
			<InfoBlock
				img={img_2}
				title='Plant Renovation'
				text='We are an online plant shop offering a wide range of cheap and trendy plants.'
			/>
			<InfoBlock
				img={img_3}
				title='Watering Graden'
				text='We are an online plant shop offering a wide range of cheap and trendy plants.'
			/>
			<div className={style.join}>
				<h5>Would you like to join newsletters?</h5>
				<Input placeholder='Enter your email address...' text='Join' type='email' />
				<p>
					We usually post offers and challenges in newsletter. We’re your online houseplant
					destination. We offer a wide range of houseplants and accessories shipped directly from
					our (green)house to yours!
				</p>
			</div>
		</div>
	);
};

export default FooterTop;
