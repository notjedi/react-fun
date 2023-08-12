import "./App.css";
import TodoList from "./components/TodoList.js";
import Button from "./components/Button.js";
import Popup from "./components/Popup";
// import { useState } from "react";
import { Component } from "react";

class App extends Component {
	state = {
		popupOpen: false,
		items: [
			{
				id: 0,
				title: "Test",
				status: "completed",
			},
			{
				id: 1,
				title: "Go piss",
				status: "incomplete",
			},
		],
	};

	setPopupOpen = () => {
		this.setState({
			popupOpen: !this.state.popupOpen,
		});
	};

	addTodo = (item) => {
		this.state.items.push(item);
		this.setState({
			items: [...this.state.items],
		});
	};

	removeTodo = (id) => {
		this.setState({
			items: this.state.items.filter((object) => object.id !== id),
		});
	};

	render() {
		// const [popupOpen, setPopupOpen] = useState(false);
		const { popupOpen } = this.state;

		return (
			<div className="App">
				<br />
				<br />
				<TodoList itemData={this.state.items} onClickDelete={this.removeTodo} />
				<Popup
					popupOpen={popupOpen}
					setPopupOpen={this.setPopupOpen}
					onClickAdd={this.addTodo}
				/>
				<br />
				<Button title="Add Task" onClick={this.setPopupOpen} />
			</div>
		);
	}
}

export default App;
