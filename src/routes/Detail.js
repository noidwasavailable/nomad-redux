import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Detail = ({ toDo, deleteToDoFromPage, modifyToDo }) => {
	const [text, setText] = useState(toDo.text);
	const [editing, setEditing] = useState(false);

	const getDate = (date) => new Date(date).toDateString();

	const deleteToDo = () => deleteToDoFromPage(toDo.id);

	const editToDo = () => {
		setEditing(!editing);
	};

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		modifyToDo(text, toDo.id);
		setEditing(!editing);
	}

	return (
		<>
			<h1>To Do</h1>
			{editing ? (
				<form onSubmit={onSubmit}>
					<input type="text" value={text} onChange={onChange} />
					<button>Modify</button>
				</form>
			) : (
				<h2>{text}</h2>
			)}
			<div>Created at: {getDate(toDo.id)}</div>
			{editing ? <></> : <button onClick={editToDo}>Edit</button>}
			<button onClick={deleteToDo}>Delete To Do</button>
		</>
	);
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return { toDo: state.find((element) => element.id === parseInt(id)) };
};

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		deleteToDoFromPage: (id) => {
			history.push("/");
			dispatch(actionCreators.deleteToDo(id));
		},
		modifyToDo: (text, id) => dispatch(actionCreators.modifyToDo(text, id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
