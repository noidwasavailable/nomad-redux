import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const todolist = document.querySelector("ul");

const ADD_TODO = "add todo";
const DEL_TODO = "delete todo";

const addToDo = (text) => {
	return { type: ADD_TODO, text: text };
};

const deleteToDo = (id) => {
	return { type: DEL_TODO, id };
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DEL_TODO:
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
	store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
	store.dispatch(deleteToDo(parseInt(e.target.parentNode.id)));
};

const paintToDos = () => {
	//first reset the todoList
	todolist.innerHTML = "";

	//add all the toDos
	const toDos = store.getState();
	toDos.forEach((toDo) => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		btn.innerText = "Delete";
		btn.addEventListener("click", dispatchDeleteToDo);
		li.id = toDo.id;
		li.innerText = toDo.text;
		li.appendChild(btn);
		todolist.appendChild(li);
	});
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
	e.preventDefault();

	const toDo = input.value;
	input.value = "";
	dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
