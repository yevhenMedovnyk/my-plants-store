import axios from "axios";
import { WISHLIST_URL } from "../constants/URLs";

export const deleteFromWishlist = async (id) => {
	try {
		await axios.delete(`${WISHLIST_URL}/${id}`);
	} catch (error) {
		console.log(error.message);
	}
};