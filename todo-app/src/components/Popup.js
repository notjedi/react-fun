import React from "react";
import { useState } from "react";
import "./Popup.css";

function Popup(props) {
	const { popupOpen, setPopupOpen, onClickAdd } = props;
	const options = [
		{ id: "0", value: "incomplete", label: "Incomplete" },
		{ id: "1", value: "completed", label: "Completed" },
	];
	const initialState = {
		id: 0,
		title: "",
		status: "",
	};
	const [state, setState] = useState(initialState);

	return (
		popupOpen && (
			<div className="popup">
				<div className="popup-content">
					<h1>Add Task</h1>

					<p>
						<label htmlFor="title">Title: </label>
						<input
							type="text"
							name="title"
							id="title"
							onChange={(event) =>
								setState({
									id: state.id,
									title: event.target.value,
									status: state.status,
								})
							}
						/>
					</p>

					<p>
						<label htmlFor="status">Status: </label>
						<select
							onChange={(event) =>
								setState({
									id: state.id,
									title: state.title,
									status: event.target.value,
								})
							}
						>
							{options.map((option) => {
								return (
									<option key={option.id} value={option.value}>
										{option.label}
									</option>
								);
							})}
						</select>
					</p>

					<br />
					<div className="buttons">
						<button type="button" onClick={() => setPopupOpen(false)}>
							Cancel
						</button>
						<button
							type="button"
							onClick={() => {
								onClickAdd(state);
								setPopupOpen(false);
							}}
						>
							Add
						</button>
					</div>
				</div>
				<br />
			</div>
		)
	);
}

export default Popup;
