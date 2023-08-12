import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
	state = {
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

	removeTodo = (id) => {
		this.setState({
			items: this.state.items.filter((object) => object.id !== id),
		});
	};

	render() {
		const { items } = this.state;

		return (
			<div className="list">
				{items && items.length > 0 ? (
					items.map((item) => (
						<div key={item.id}>
							<TodoItem itemData={item} onClickDelete={this.removeTodo} />
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
