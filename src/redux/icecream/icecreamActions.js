import { BUY_ICECREAM } from "./icecreamTypes";
import { ADD_ICECREAM } from "./icecreamTypes";

export const buyIcecream = () => {
	return {
		type: BUY_ICECREAM,
	};
};

export const addIcecream = () => {
	return {
		type: ADD_ICECREAM,
	};
};
