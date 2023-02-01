import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

export default function Index() {
	return (
		<div className="Index">
			<h1> Image Slider </h1>
			<App />
		</div>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));
