import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
	const [text, setText] = useState("");

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		addToDo(text);
		console.log(toDos);
		setText("");
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<li key={toDo.id}>{toDo.text}</li>
				))}
			</ul>
		</>
	);
}

const mapStateToProps = (state) => {
	return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
	return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
