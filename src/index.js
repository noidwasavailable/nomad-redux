import { createStore } from "redux";

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const output = document.getElementById("countOutput");

const ADD = "add";
const SUBTRACT = "subtract";

// count is going to be undefined, so we set it as 0 as default.
const countModifier = (count = 0, action) => {
	switch (action.type) {
		case ADD:
			return count + 1;
		case SUBTRACT:
			return count - 1;
		default:
			return count;
	}
};

const countStore = createStore(countModifier);

const addHandler = () => {
	countStore.dispatch({ type: ADD });
};
const subtractHandler = () => {
	countStore.dispatch({ type: SUBTRACT });
};

const broadcastCount = () => {
	output.innerText = countStore.getState();
};

countStore.subscribe(broadcastCount);

addButton.addEventListener("click", addHandler);
subtractButton.addEventListener("click", subtractHandler);
