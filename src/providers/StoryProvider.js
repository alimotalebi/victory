import React from "react";
import {StoryContext} from "../contexts/StoryContext";

export default class extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<>
				<StoryContext.Provider value={{...this.props}}>
					{this.props.children}
				</StoryContext.Provider>
			</>
		)
	}
}
