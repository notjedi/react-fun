import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
	render() {
		const { popupOpen, setPopupOpen } = this.props;

		return (
			popupOpen && (
				<div className="popup">
					<div className="popup-content">
						<h1>Add Todo</h1>
						<p>Title</p>
						<p>Status</p>
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
