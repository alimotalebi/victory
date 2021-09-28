import React from "react";
import {DraftContext} from "../contexts/DraftContext";

export default class extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<>
				<DraftContext.Provider value={{...this.props}}>
					{this.props.children}
				</DraftContext.Provider>
			</>
		)
	}
}
