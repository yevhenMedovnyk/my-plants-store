import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import ShopItem from "../../components/ShopItem/ShopItem";
import style from "./wishlistPage.module.scss";
import { fetchWishlist, setCurrentPage } from "../../store/Slices/wishlistSlice";
import { useEffect } from "react";
import { WISHLIST_URL } from "../../constants/URLs";

const WishlistPage = () => {
	const dispatch = useDispatch();
	const { wishlist, status, currentPage, totalCount, pageLimit } = useSelector(
		state => state.wishlist,
	);
	const { email } = useSelector(state => state.auth.user);

	useEffect(() => {
		dispatch(
			fetchWishlist(`${WISHLIST_URL}?user.email=${email}
			&_page=${currentPage + 1}&_limit=${pageLimit}`),
		);
	}, [currentPage]);

	return (
		<div className={style.wrapper}>
			<div className={style.items}>
				{status === "loading" ? (
					<p style={{ paddingTop: 20, paddingLeft: 20 }}>Loading...</p>
				) : null}
				{status === "resolved" && wishlist.map(item => <ShopItem key={item.id} {...item} />)}
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
	);
};

export default WishlistPage;
