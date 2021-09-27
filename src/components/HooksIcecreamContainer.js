import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream, addIcecream } from "../redux";

const HooksIcecreamContainer = () => {
	const numberOfIcecream = useSelector(
		(state) => state.icecream.numberOfIcecream
	);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of ice-cream- {numberOfIcecream}</h2>
			<button onClick={() => dispatch(buyIcecream())}>Buy ice-cream</button>
			<button onClick={() => dispatch(addIcecream())}> ice-cream</button>
		</div>
	);
};

export default HooksIcecreamContainer;
