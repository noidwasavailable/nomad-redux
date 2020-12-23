import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Detail = ({ toDo, deleteToDoFromPage }) => {
	const getDate = (date) => new Date(date).toDateString();

	const onClick = () => deleteToDoFromPage(toDo.id);
	return (
		<>
			<h1>To Do</h1>
			<h2>{toDo.text}</h2>
			<div>Created at: {getDate(toDo.id)}</div>
			<button onClick={onClick}>Delete To Do</button>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
