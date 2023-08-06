import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
	render() {
		const { popupOpen, setPopupOpen } = this.props;
		const options = [
			{ id: "0", value: "incomplete", label: "Incomplete" },
			{ id: "1", value: "completed", label: "Completed" },
		];

		return (
			popupOpen && (
				<div className="popup">
					<div className="popup-content">
						<h1>Add Task</h1>

						<p>
							<label htmlFor="title">Title: </label>
							<input type="text" name="title" id="title" />
						</p>

						<p>
							<label htmlFor="status">Status: </label>
							<select>
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
							<button type="button">Add</button>
						</div>
					</div>
					<br />
				</div>
			)
		);
	}
}

export default Popup;
