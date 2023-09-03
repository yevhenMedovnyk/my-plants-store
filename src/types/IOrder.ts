import { IAdressData } from "./IAdressData";
import { IPlant } from "./IPlant";
import { IUser } from "./IUser";

export interface IOrder {
	plants: IPlant[];
	address: IAdressData;
	sum: number;
	user: IUser;
	time: string;
	id: number;
}
