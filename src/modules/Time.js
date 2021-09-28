import React from 'react';

export default (props) => {
	return (
		<React.Fragment>
			<div>yes</div>
			{!props.readOnly && <div>ok</div>}
		</React.Fragment>
	);
}

