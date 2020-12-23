import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
	name: "toDoReducer",
	initialState: localStorage.getItem("todos")
		? JSON.parse(localStorage.getItem("todos"))
		: [],
	reducers: {
		add: (state, action) => {
			state.unshift({ text: action.payload, id: Date.now() });
			localStorage.setItem("todos", JSON.stringify(state));
		},
		remove: (state, action) => {
			const newState = state.filter((toDo) => toDo.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(newState));
			return newState;
		},
		modify: {
			reducer: (state, action) => {
				console.log(action);
				let newState = [];
				state.forEach((toDo) => {
					if (toDo.id !== action.payload.id) newState.push(toDo);
					else
						newState.push({
							text: action.payload.text,
							id: action.payload.id,
						});
				});
				localStorage.setItem("todos", JSON.stringify(newState));
				return newState;
			},
			prepare: (text, id) => {
				return { payload: { id, text } };
			},
		},
	},
});

//store
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove, modify } = toDos.actions;

export default store;
