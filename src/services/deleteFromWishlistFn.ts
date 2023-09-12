import axios, {AxiosError} from 'axios';
import {WISHLIST_URL} from '../constants/URLs';

export const deleteFromWishlist = async (id: string) => {
	console.log(id);

	try {
		await axios.delete(`${WISHLIST_URL}/${id}`);
	} catch (error) {
		const errors = error as Error | AxiosError;
		console.log(errors.message);
	}
};
