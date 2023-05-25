import style from "./homePage.module.scss";
import MainSlider from "../../components/MainSlider/MainSlider";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useEffect } from "react";
import Sort from "../../components/Sort/Sort";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../store/Slices/mainSlice";
import Pagination from "../../components/Pagination/Pagination";

const HomePage = () => {
	const dispatch = useDispatch();
	const { shopItems, currentPage } = useSelector(state => state.plants);
	const { order, sortby } = useSelector(state => state.sort);

	useEffect(() => {
		dispatch(
			fetchPlants(
				`https://646481ac043c103502bb2e16.mockapi.io/plants?
				page=${currentPage}&limit=9&sortby=${sortby}&order=${order}`,
			),
		);
	}, [currentPage, order, sortby]);

	return (
		<div className={style.wrapper}>
			<MainSlider />
			<div className={style.shopWrapper}>
				<div className={style.filterBlock}></div>
				<div className={style.mainBlock}>
					<Sort />
					<div className={style.storeItems}>
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
