import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/404";
import Team from "./components/Team";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<h1>Hello World</h1>} />
				<Route path="/team" element={<Team />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
