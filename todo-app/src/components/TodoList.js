import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
	state = {
		items: [
			{
				id: 0,
				title: "Go shit",
				status: "completed",
			},
			{
				id: 1,
				title: "Go piss",
				status: "incomplete",
			},
		],
	};

	render() {
		return (
			<div className="list">
				{this.state.items && this.state.items.length > 0 ? (
					this.state.items.map((item) => (
						<div key={item.id}>
							<TodoItem itemData={item} />
							<br />
						</div>
					))
				) : (
					<h1>No items</h1>
				)}
			</div>
		);
	}
}

export default TodoList;
