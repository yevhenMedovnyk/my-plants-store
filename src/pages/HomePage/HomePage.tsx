import { useEffect } from "react";
import style from "./homePage.module.scss";

import MainSlider from "../../components/MainSlider/MainSlider";
import ShopItem from "../../components/ShopItem/ShopItem";
import Sort from "../../components/Sort/Sort";
import Pagination from "../../components/Pagination/Pagination";

import { fetchPlants, setCurrentPage } from "../../store/Slices/mainSlice";
import { PLANTS_URL } from "../../constants/URLs";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { shopItems, currentPage, totalCount, status, pageLimit } = useAppSelector(
		state => state.plants,
	);
	const { order, sortby, category } = useAppSelector(state => state.sort);
	const filterByCategory = () => {
		if (category === "All Plants") {
			return "";
		}
		return `&categories_like=${category}`;
	};

	useEffect(() => {
		dispatch(
			fetchPlants(
				`${PLANTS_URL}?
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
							<p style={{ paddingBlock: 60, paddingLeft: 20 }}>Loading...</p>
						) : null}
						{status === "resolved" && shopItems.map(item => <ShopItem key={item.id} {...item} />)}
					</div>
					{totalCount > pageLimit && status === "resolved" && (
						<Pagination
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							totalCount={totalCount}
							pageLimit={pageLimit}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
