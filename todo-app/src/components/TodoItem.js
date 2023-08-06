import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
	render() {
		const item = this.props.itemData;

		return (
			<div className="flex-container" key={item.id}>
				<div className="flex-child" style={{ width: "10%" }}>
					<input type="checkbox" />
				</div>
				<div
					className="flex-child"
					style={{ width: "40%", textAlign: "start" }}
				>
					<h3> {item.title} </h3>
				</div>
				<div
					className="flex-child"
					style={{ width: "30%", textAlign: "start" }}
				>
					<h3> {item.status} </h3>
				</div>
				<div className="flex-child" style={{ width: "20%" }}>
					<button type="button">Delete</button>
				</div>
			</div>
		);
	}
}

export default TodoItem;
