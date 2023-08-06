import "./App.css";
import TodoList from "./components/TodoList.js";
import Button from "./components/Button.js";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
	const [popupOpen, setPopupOpen] = useState(false);

	return (
		<div className="App">
			<br />
			<br />
			<TodoList />
			<Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
			<br />
			<Button title="Add Task" onClick={() => setPopupOpen(!popupOpen)} />
		</div>
	);
}

export default App;
