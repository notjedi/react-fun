import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
	render() {
		const item = this.props.itemData;
		return (
			<div className="flex-container" key={item.id}>
				<div className="flex-child">
					<h3> {item.title} </h3>
				</div>
				<div className="flex-child">
					<h3> {item.status} </h3>
				</div>
			</div>
		);
	}
}

export default TodoItem;
