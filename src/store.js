import { createStore } from "redux";

const ADD = "ADD";
const DEL = "DEL";

//actionCreators
const addToDo = (text) => {
	return { type: ADD, text: text };
};

const deleteToDo = (id) => {
	return { type: DEL, id };
};

export const actionCreators = {
	addToDo,
	deleteToDo,
};

//reducer
const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DEL:
			return state.filter((toDo) => toDo.id !== action.id);
		default:
			return state;
	}
};

//store
const store = createStore(reducer);

//dispatches

//subscriptions

export default store;
