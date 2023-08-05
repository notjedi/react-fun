import React, { Component } from "react";
// import "./Popup.css";

class Popup extends Component {
	render() {
		const { popupOpen } = this.props;

		return (
			popupOpen && (
				<div className="popup">
					<div className="popup-content">
						<h1>GeekforGeeks!</h1>
						<p>This is a popup box!</p>
						<button type="button">Cancel</button>
						<button type="button">Add</button>
					</div>
				</div>
			)
		);
	}
}

export default Popup;
