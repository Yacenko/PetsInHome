import React from 'react';


const Animal = (props) => {
	console.log(props);
	return (
		<div>{props.text}</div>
	);

};

export default Animal;