import style from "./homePage.module.scss";
import MainSlider from "../../components/MainSlider/MainSlider";
import StoreItem from "../../components/StoreItem/StoreItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Sort from "../../components/Sort/Sort";

const HomePage = () => {
	const [shopItems, setShopItems] = useState([]);

	const fetchData = async () => {
		const res = await axios.get(
			"https://646481ac043c103502bb2e16.mockapi.io/plants?page=1&limit=9&sortBy=price&order=asc",
		);
		setShopItems(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={style.wrapper}>
			<MainSlider />
			<div className={style.shopWrapper}>
				<div className={style.filterBlock}></div>
				<div className={style.mainBlock}>
					<Sort />
					<div className={style.storeItems}>
						{shopItems.map(item => (
							<StoreItem key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
