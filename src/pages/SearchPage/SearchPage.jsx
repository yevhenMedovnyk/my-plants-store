import style from "./searchPage.module.scss";

import ShopItem from "../../components/ShopItem/ShopItem";

import { useSelector } from "react-redux";

const SearchPage = () => {
	const { shopItems } = useSelector(state => state.plants);
	const { searchInputValue } = useSelector(state => state.search);

	return (
		<div className={style.wrapper}>
			<div className={style.searchParams}>Search by: <span>&#34;{searchInputValue}&#34;</span></div>
			<div className={style.shopWrapper}>
				<div className={style.mainBlock}>
					<div className={style.storeItems}>
						{shopItems.map(item => (
							<ShopItem key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
