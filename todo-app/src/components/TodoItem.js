import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
	const item = props.itemData;
	const { onClickDelete } = props;
	const [checked, setChecked] = useState(item.status === "completed");
	const handleCheckbox = () => {
		setChecked(!checked);
	};

	return (
		<div className="flex-container">
			<div className="flex-child" style={{ width: "10%" }}>
				<input type="checkbox" onChange={handleCheckbox} checked={checked} />
			</div>

			{checked ? (
				<div
					className="flex-child"
					style={{ width: "40%", textAlign: "start" }}
				>
					<s>
						{" "}
						<h3> {item.title} </h3>{" "}
					</s>
				</div>
			) : (
				<div
					className="flex-child"
					style={{ width: "40%", textAlign: "start" }}
				>
					<h3> {item.title} </h3>
				</div>
			)}

			<div className="flex-child" style={{ width: "30%", textAlign: "start" }}>
				<h3> {item.status} </h3>
			</div>
			<div className="flex-child" style={{ width: "20%" }}>
				<button type="button" onClick={() => onClickDelete(item.id)}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default TodoItem;
