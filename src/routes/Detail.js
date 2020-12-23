import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import "./Detail.scss";

const Detail = ({ toDo, deleteToDoFromPage, modifyToDo, history }) => {
	const [text, setText] = useState(toDo.text);
	const [editing, setEditing] = useState(false);
	const [modified, setModified] = useState(false);

	const getDate = (date) => new Date(date).toDateString();

	const deleteToDo = () => deleteToDoFromPage(toDo.id);

	const editToDo = () => {
		setEditing(!editing);
	};

	function onChange(e) {
		setText(e.target.value);
		if (!modified) setModified(true);
	}

	function onSubmit(e) {
		e.preventDefault();
		if (modified) modifyToDo(text, toDo.id);
		setEditing(!editing);
	}

	const escFunction = useCallback((e) => {
		if (e.keyCode === 27) {
			//esc key is pressed
			setEditing(false);
		}
	}, []);

	const goBack = () => history.goBack();

	useEffect(() => {
		document.addEventListener("keydown", escFunction);

		return () => {
			document.removeEventListener("keydown", escFunction);
		};
		//eslint-disable-next-line
	}, []);

	return (
		<div id="Details">
			<h1>To Do</h1>
			{editing ? (
				<form onSubmit={onSubmit}>
					<input type="text" value={text} onChange={onChange} />
					<button className="buttonBlue">Done</button>
				</form>
			) : (
				<div id="ToDo">
					<h2>{text}</h2>{" "}
					<button onClick={editToDo} className="buttonBlue">
						Edit
					</button>
				</div>
			)}
			<span>Created at: {getDate(toDo.id)}</span>
			<div id="buttonArray">
				<button onClick={goBack} id="goBack" className="buttonGrey">
					Go Back
				</button>
				<button onClick={deleteToDo} id="Delete" className="buttonRed">
					Delete To Do
				</button>
			</div>
		</div>
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
