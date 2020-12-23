import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";
import "./Home.scss";

function Home({ toDos, addToDo }) {
	const [text, setText] = useState("");

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		if (text !== "") addToDo(text);
		setText("");
	}

	return (
		<div id="Home">
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button className="buttonBlue">Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<ToDo key={toDo.id} toDo={toDo} />
				))}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
	return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
