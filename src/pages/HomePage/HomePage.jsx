import { useEffect } from "react";
import style from "./homePage.module.scss";

import MainSlider from "../../components/MainSlider/MainSlider";
import ShopItem from "../../components/ShopItem/ShopItem";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../store/Slices/mainSlice";

export const pageLimit = 16;

const HomePage = () => {
	const dispatch = useDispatch();
	const { shopItems, currentPage, status } = useSelector(state => state.plants);
	const { order, sortby, category } = useSelector(state => state.sort);
	const filterByCategory = () => {
		if (category === "All Plants") {
			return "";
		}
		return `&categories_like=${category}`;
	};

	useEffect(() => {
		dispatch(
			fetchPlants(
				`https://plants-api-dkpe.onrender.com/plants?
				_page=${
					currentPage + 1
				}&_limit=${pageLimit}&_sort=${sortby}&_order=${order}${filterByCategory()}&_start=0&_end=1`,
			),
		);
	}, [currentPage, order, sortby, category]);

	return (
		<div className={style.wrapper}>
			<MainSlider />
			<div className={style.shopWrapper}>
				<div className={style.mainBlock}>
					<Sort />
					<div className={style.storeItems}>
						{status === "loading" ? (
							<p style={{ paddingTop: 20, paddingLeft: 20 }}>Loading...</p>
						) : null}
						{shopItems.map(item => (
							<ShopItem key={item.id} {...item} />
						))}
					</div>
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
