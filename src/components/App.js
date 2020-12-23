import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import "./App.scss";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/:id" component={Detail} />
		</Router>
	);
}

export default App;
