import React, { Component } from "react";

class TodoItem extends Component {
	render() {
		const item = this.props.itemData;
		return (
			<div key={item.id}>
				<h3> {item.title} </h3>
				<h3> {item.status} </h3>
			</div>
		);
	}
}

export default TodoItem;
