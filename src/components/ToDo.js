import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";
import "./ToDo.scss";

const ToDo = ({ toDo, deleteToDo }) => {
	return (
		<li>
			<Link to={`/${toDo.id}`}>{toDo.text}</Link>
			<button onClick={deleteToDo} className="buttonRed">
				Delete
			</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, { toDo }) => {
	return {
		deleteToDo: () => {
			dispatch(remove(toDo.id));
		},
	};
};

export default connect(null, mapDispatchToProps)(ToDo);
