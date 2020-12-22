import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const todolist = document.querySelector("ul");

const ADD_TODO = "add todo";
const DEL_TODO = "delete todo";

//Action Creators: functions that create the action objects
//Actions are the objects which inform the reducer how to change the state
const addToDo = (text) => {
	return { type: ADD_TODO, text: text };
};

const deleteToDo = (id) => {
	return { type: DEL_TODO, id };
};

//Reducer: This is the function that is responsible for changing the state.
//         State will be changed only here and nowhere else.
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

//createStore: Store stores a state that Redux manages with a reducer and actions.
const store = createStore(reducer);

//Dispatch: Dispatching a store with an action object makes Redux call the reducer
//          in the background with the given action, performing the requested
//          change accordingly.
const dispatchAddToDo = (text) => {
	store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
	store.dispatch(deleteToDo(parseInt(e.target.parentNode.id)));
};

//Subscriptions: We can create functions which are subscribed to the store,
//               which means that the function will be called whenever
//               the state in the store is dispatched.
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
