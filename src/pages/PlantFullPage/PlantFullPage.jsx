import style from "./plantFullPage.module.scss";

import Button from "../../components/UI/Button/Button";
import heartGreen from "./../../assets/images/heart-green.svg";
import img from "./../../assets/images/welcome/main-img.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShopItemPage = () => {
	const [item, setItem] = useState({});
	const { id } = useParams();
	const { plant_name, image_link, description, care_instructions, categories, size, price } = item;

	console.log(typeof id);

	const fetchData = async () => {
		const res = await axios.get(`https://646481ac043c103502bb2e16.mockapi.io/plants/${id}`);
		setItem(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(item);

	return (
		<div className={style.wrapper}>
			<div className={style.image}>
				<img src={img} alt='' />
			</div>
			<div className={style.content}>
				<div className={style.head}>
					<div className={style.titleBlock}>
						<h1>{plant_name}</h1>
						<span>${price}</span>
					</div>
					<div className={style.star}>
						<img src='' alt='' />
						<span></span>
					</div>
				</div>

				<h3 className={style.descTitle}>Short Description:</h3>
				<p className={style.description}>{description}</p>
				<div className={style.action}>
					<div className={style.quantity}>
						<Button text='-' classes='plusMinus' />
						<span>1</span>
						<Button text='+' classes='plusMinus' />
					</div>
					<Button text='Buy NOW' classes='plantItem' />
					<Button text='Add to cart' classes='transparent' />
					<Button img={heartGreen} classes='transparent' />
				</div>
			</div>
		</div>
	);
};

export default ShopItemPage;
