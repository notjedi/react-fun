import React, { Component } from "react";

class Button extends Component {
	popupOpen = false;

	render() {
		const { title, onClick } = this.props;
		return (
			<button type="button" onClick={onClick}>
				{title}
			</button>
		);
	}
}

export default Button;
