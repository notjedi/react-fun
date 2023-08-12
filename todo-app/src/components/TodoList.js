import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
	render() {
		const items = this.props.itemData;
		const { onClickDelete } = this.props;

		return (
			<div className="list">
				{items && items.length > 0 ? (
					items.map((item) => (
						<div key={item.id}>
							<TodoItem itemData={item} onClickDelete={onClickDelete} />
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
