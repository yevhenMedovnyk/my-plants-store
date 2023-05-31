import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/Slices/cartSlice";

import style from "./plantFullPage.module.scss";
import Button from "../../components/UI/Button/Button";
import axios from "axios";

import heartGreen from "./../../assets/images/heart-green.svg";

const ShopItemPage = () => {
	const [item, setItem] = useState({});
	const [count, setCount] = useState(1);
	const dispatch = useDispatch();

	const { id } = useParams();
	const { plant_name, image_link, description, care_instructions, categories, size, price } = item;

	const fetchData = async () => {
		const res = await axios.get(`https://plants-api-dkpe.onrender.com/plants/${id}`);
		setItem(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const onClickAddToCart = () => {
		dispatch(addItemToCart({ id, plant_name, price, image_link, count }));
	};
	const handleMinusClick = () => {
		if (count <=1) {
			return;
		}
		setCount(prev => prev - 1);
	};
	const handlePlusClick = () => {
		setCount(prev => prev + 1);
	};

	return (
		<div className={style.wrapper}>
			<div className={style.image}>
				<img src={image_link} alt={plant_name} />
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
						<Button text='-' classes='plusMinus' onClick={handleMinusClick} />
						<span>{count}</span>
						<Button text='+' classes='plusMinus' onClick={handlePlusClick} />
					</div>
					<Button text='Buy NOW' classes='plantItem' />
					<Button text='Add to cart' classes='transparent' onClick={onClickAddToCart} />
					<Button img={heartGreen} classes='transparent' />
				</div>
			</div>
		</div>
	);
};

export default ShopItemPage;
