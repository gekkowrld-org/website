import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<h1>Hello World</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
