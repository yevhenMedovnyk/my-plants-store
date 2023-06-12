import PaymentMethodCheck from "../PaymentMethodCheck/PaymentMethodCheck";
import style from "./paymentMethod.module.scss";

import cards from "./../../assets/images/bank_cards.jpg";

const PaymentMethod = () => {
	const labelImg = <img src={cards} alt='cards' />;
	return (
		<>
			<p className={style.title}>Payment Method</p>
			<div className={style.checkContainer}>
				<PaymentMethodCheck id='card' label={labelImg} />
				<PaymentMethodCheck id='bankTransfer' label='Direct bank transfer' />
				<PaymentMethodCheck id='cash' label='Cash on delivery' />
			</div>
		</>
	);
};

export default PaymentMethod;
