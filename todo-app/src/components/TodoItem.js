import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
	const item = props.itemData;
	const [checked, setChecked] = useState(false);
	const handleCheckbox = () => {
		console.log("hi from checkbox", item.title);
		setChecked(!checked);
	};
	function handleDelete() {
		console.log("hi from delete", item.title);
	}

	return (
		<div className="flex-container">
			<div className="flex-child" style={{ width: "10%" }}>
				<input type="checkbox" onChange={handleCheckbox} checked={checked} />
			</div>
			<div className="flex-child" style={{ width: "40%", textAlign: "start" }}>
				<h3> {item.title} </h3>
			</div>
			<div className="flex-child" style={{ width: "30%", textAlign: "start" }}>
				<h3> {item.status} </h3>
			</div>
			<div className="flex-child" style={{ width: "20%" }}>
				<button type="button" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default TodoItem;
