import { createStore } from "redux";

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const output = document.getElementById("countOutput");

// count is going to be undefined, so we set it as 0 as default.
const countModifier = (count = 0, action) => {
	if (action.type === "add") count++;
	else if (action.type === "subtract") count--;
	console.log(count);
	return count;
};

const countStore = createStore(countModifier);

const addHandler = () => {
	countStore.dispatch({ type: "add" });
};
const subtractHandler = () => {
	countStore.dispatch({ type: "subtract" });
};

addButton.addEventListener("click", addHandler);
subtractButton.addEventListener("click", subtractHandler);
