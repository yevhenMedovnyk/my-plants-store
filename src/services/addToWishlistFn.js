import axios from "axios";
import { WISHLIST_URL } from "../constants/URLs";

export const addToWishlist = async (props) => {
	try {
		await axios.post(WISHLIST_URL, {
			...props,
		});
	} catch (error) {
		console.log(error.message);
	}
};