import React from "react";
import {UserContext} from "../contexts/UserContext";

export default class extends React.Component {
	componentDidMount() {
	}
	render() {
		return (
			<>
				<UserContext.Provider value={{...this.props}}>
					{this.props.children}
				</UserContext.Provider>
			</>
		)
	}
}
