import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ toDo, onClick }) => {
	return (
		<li>
			{toDo.text} <button onClick={onClick}>Delete</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, { toDo }) => {
	return {
		onClick: () => dispatch(actionCreators.deleteToDo(toDo.id)),
	};
};

export default connect(null, mapDispatchToProps)(ToDo);
