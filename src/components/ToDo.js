import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ toDo, deleteToDo }) => {
	return (
		<li>
			<Link to={`/${toDo.id}`}>{toDo.text}</Link>
			<button onClick={deleteToDo}>Delete</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, { toDo }) => {
	return {
		deleteToDo: () => {
			console.log("delete to do from button");
			dispatch(actionCreators.deleteToDo(toDo.id));
		},
	};
};

export default connect(null, mapDispatchToProps)(ToDo);
