import { createStore } from "redux";

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const output = document.getElementById("countOutput");

const countModifier = (count = 0) => {
	return count;
};

const countStore = createStore(countModifier);
