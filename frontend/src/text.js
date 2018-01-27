import React from 'react';

const Text = (props) => {
	console.log(props);
	return (
		<div>{props.text}</div>
	);

};

export default Text;