import {useEffect, useState} from 'react';
import {Link, useLoaderData, useParams} from 'react-router-dom';
import {addItemToCart} from '../../store/Slices/cartSlice';

import style from './plantFullPage.module.scss';
import Button from '../../components/UI/Button/Button';
import axios from 'axios';

import {addItemToWishlist, removeFromWishlist} from '../../store/Slices/wishlistSlice';
import {deleteFromWishlist} from '../../services/deleteFromWishlistFn';
import {addToWishlist} from '../../services/addToWishlistFn';

import heartGreen from './../../assets/images/heart-green.svg';
import heart from './../../assets/images/heart.svg';
import {PLANTS_URL} from '../../constants/URLs';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {IShopItem} from '../../types/IShopItem';

interface IParams {
	id: string;
}

const ShopItemPage = () => {
	const item = useLoaderData() as IShopItem;
	const {cart} = useAppSelector((state) => state.cart);
	const {wishlist} = useAppSelector((state) => state.wishlist);
	const {uid} = useAppSelector((state) => state.auth.user);
	const [inCart, setInCart] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);

	const [count, setCount] = useState(1);
	const dispatch = useAppDispatch();
	const {id} = useParams();

	const {plant_name, image_link, description, price} = item;

	useEffect(() => {
		if (cart.some((item) => item.id === id)) {
			setInCart(true);
		} else {
			setInCart(false);
		}
		if (wishlist.some((item) => item.id === id)) {
			setInWishlist(true);
		} else {
			setInWishlist(false);
		}
	}, [cart, wishlist]);

	const onClickAddToWishlist = () => {
		if (!uid) {
			return;
		} else if (inWishlist && id) {
			dispatch(removeFromWishlist(id));
			deleteFromWishlist(id);
		} else {
			dispatch(addItemToWishlist({...(item as object)}));
			addToWishlist(item);
		}
	};

	const onClickAddToCart = () => {
		id && dispatch(addItemToCart({id, plant_name, price, image_link, count}));
	};

	const handleMinusClick = () => {
		if (count <= 1) {
			return;
		}
		setCount((prev) => prev - 1);
	};
	const handlePlusClick = () => {
		setCount((prev) => prev + 1);
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
						<img src="" alt="" />
						<span></span>
					</div>
				</div>

				<h3 className={style.descTitle}>Short Description:</h3>
				<p className={style.description}>{description}</p>
				<div className={style.action}>
					<div className={style.quantity}>
						<Button text="-" classes="plusMinus" onClick={handleMinusClick} />
						<span>{count}</span>
						<Button text="+" classes="plusMinus" onClick={handlePlusClick} />
					</div>
					<Link to="/cart/checkout" className={style.byNow}>
						<Button text="Buy NOW" classes="plantItem" onClick={onClickAddToCart} />
					</Link>
					<Button
						disabled={!!inCart}
						text="Add to cart"
						classes="transparent"
						onClick={onClickAddToCart}
					/>
					<Button
						onClick={onClickAddToWishlist}
						img={inWishlist ? heartGreen : heart}
						classes="transparent"
					/>
				</div>
			</div>
		</div>
	);
};

export const fetchData = async ({params}: {params: {id: string}}) => {

	const res = await axios.get(`${PLANTS_URL}/${params.id}`);

	return res.data;
};

export default ShopItemPage;
