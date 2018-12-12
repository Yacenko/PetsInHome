import React from 'react';

/**
 * Component to show texts in an application
 * @param props
 * @returns {XML}
 * @constructor
 */
const Text = (props) => {
	const text = props.text || '';
	
	let arrStr = text.split('/n');
	
	const atLastArray = arrStr.map((item, index) => 
		<p key={index} className='paragraph' dangerouslySetInnerHTML={{ __html: item }}></p>

	);

	return (
		<span>{atLastArray}</span>

	);
};

export default Text;
