import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const todolist = document.querySelector("ul");

const ADD_TODO = "add todo";
const DEL_TODO = "delete todo";

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text, id: Date.now() }];
		case DEL_TODO:
			return [...state];
		default:
			return state;
	}
};

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

const onSubmit = (e) => {
	e.preventDefault();

	const toDo = input.value;
	input.value = "";
	store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
