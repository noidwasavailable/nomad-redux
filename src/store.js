import { createStore } from "redux";

const ADD = "ADD";
const DEL = "DEL";

//actionCreators
const addToDo = (text) => {
	return { type: ADD, text: text };
};

const deleteToDo = (id) => {
	return { type: DEL, id: parseInt(id) };
};

export const actionCreators = {
	addToDo,
	deleteToDo,
};

//reducer
const reducer = (
	state = localStorage.getItem("todos")
		? JSON.parse(localStorage.getItem("todos"))
		: [],
	action
) => {
	switch (action.type) {
		case ADD:
			const addState = [{ text: action.text, id: Date.now() }, ...state];
			localStorage.setItem("todos", JSON.stringify(addState));
			return addState;
		case DEL:
			const delState = state.filter((toDo) => toDo.id !== action.id);
			localStorage.setItem("todos", JSON.stringify(delState));
			return delState;
		default:
			return state;
	}
};

//store
const store = createStore(reducer);

//dispatches

//subscriptions

export default store;
