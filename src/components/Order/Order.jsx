import { Link } from "react-router-dom";
import style from "./order.module.scss";

const Order = props => {
	const { sum, plants, id, plant_name, time } = props;

	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<span className={style.orderNum}>Order №: {id}</span>
				<span className={style.date}>{new Date(time).toLocaleDateString()}</span>
			</div>
			<div className={style.images}>
				{plants.map(item => (
					<div className={style.image} key={item.id}>
						<Link to={`/plant/${item.id}`}>
							<img src={item.image_link} alt={plant_name} />
						</Link>
					</div>
				))}
			</div>
			<div className={style.totalSum}>
				Total sum:<span> ${sum}</span>
			</div>
		</div>
	);
};

export default Order;
