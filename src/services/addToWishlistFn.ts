import { IShopItem } from './../types/IShopItem';
import { IPlant } from './../types/IPlant';
import axios from "axios";
import { WISHLIST_URL } from "../constants/URLs";
import { IUser } from '../types/IUser';

interface IAddToWishlistProps extends IShopItem {
	user?: IUser;
}



export const addToWishlist = async (props: IAddToWishlistProps) => {
	try {
		await axios.post(WISHLIST_URL, {
			...props,
		});
	} catch (error) {
		console.log(error.message);
	}
};